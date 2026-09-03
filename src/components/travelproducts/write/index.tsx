"use client";

import Image from "next/image";
import Script from "next/script";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "@apollo/client/react";
import OpenStreetMap from "@/components/ui/open-street-map";
import { CreateTravelproductDocument } from "@/graphql/generated/graphql";
import { uploadFile } from "@/lib/upload-file";
import { hasAccessToken } from "@/lib/auth-client";
import styles from "./styles.module.css";

type Coordinates = { latitude: number; longitude: number };
type GeocodeResult = Coordinates & { displayName?: string; message?: string };
type PostcodeResult = {
  zonecode: string;
  address: string;
  roadAddress: string;
  jibunAddress: string;
};

declare global {
  interface Window {
    daum?: {
      Postcode: new (options: {
        oncomplete: (data: PostcodeResult) => void;
      }) => { open: () => void };
    };
  }
}

const TOOLBAR_ITEMS = ["B", "𝑖", "U", "A⁝", "≡", "☷", "¶", "🔗", "▣", "☺", "+"];

export default function TravelproductWrite() {
  const router = useRouter();
  const [createTravelproduct] = useMutation(CreateTravelproductDocument);
  const [name, setName] = useState("");
  const [remarks, setRemarks] = useState("");
  const [contents, setContents] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [coordinates, setCoordinates] = useState<Coordinates>();
  const [mapAddress, setMapAddress] = useState("현재 위치");
  const [imageFile, setImageFile] = useState<File>();
  const [imagePreview, setImagePreview] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const canSubmit = Boolean(
    name.trim() && remarks.trim() && contents.trim() && Number(price) > 0 && address.trim(),
  );

  useEffect(() => {
    if (!hasAccessToken()) {
      router.replace(
        `/login?returnTo=${encodeURIComponent("/travelproducts/new")}`,
      );
      return;
    }
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) setIsAuthorized(true);
    });
    return () => {
      cancelled = true;
    };
  }, [router]);

  useEffect(() => {
    if (!hasAccessToken()) return;
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
        setMapAddress("현재 위치");
      },
      () => {
        // 위치 권한이 거부되면 주소 입력 전의 안내 화면을 유지합니다.
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 },
    );
  }, []);

  const findLocation = async (targetAddress?: string) => {
    const addressToFind = (targetAddress ?? address).trim();
    if (!addressToFind) {
      setErrorMessage("지도에 표시할 주소를 입력해 주세요.");
      return;
    }
    setIsLocating(true);
    setErrorMessage("");
    try {
      const response = await fetch(
        `/api/geocode?address=${encodeURIComponent(addressToFind)}`,
      );
      const result = (await response.json()) as GeocodeResult;
      if (!response.ok) throw new Error(result.message ?? "위치를 찾지 못했습니다.");
      setCoordinates(result);
      setMapAddress(result.displayName ?? addressToFind);
    } catch (error) {
      setCoordinates(undefined);
      setErrorMessage(error instanceof Error ? error.message : "위치를 찾지 못했습니다.");
    } finally {
      setIsLocating(false);
    }
  };

  const handlePostcodeSearch = () => {
    if (!window.daum?.Postcode) {
      setErrorMessage("우편번호 검색 서비스를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    new window.daum.Postcode({
      oncomplete: (data) => {
        const selectedAddress =
          data.roadAddress || data.jibunAddress || data.address;
        setZipcode(data.zonecode);
        setAddress(selectedAddress);
        setAddressDetail("");
        setErrorMessage("");
        void findLocation(selectedAddress);
      },
    }).open();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      const images = imageFile ? [await uploadFile(imageFile)] : [];
      const { data } = await createTravelproduct({
        variables: {
          createTravelproductInput: {
            name: name.trim(),
            remarks: remarks.trim(),
            contents: contents.trim(),
            price: Number(price),
            tags: tags.split(/[,#]/).map((tag) => tag.trim()).filter(Boolean),
            images,
            travelproductAddress: {
              zipcode: zipcode.trim() || undefined,
              address: address.trim(),
              addressDetail: addressDetail.trim() || undefined,
              lat: coordinates?.latitude,
              lng: coordinates?.longitude,
            },
          },
        },
      });
      const id = data?.createTravelproduct._id;
      if (!id) throw new Error("등록된 숙박권 정보를 확인하지 못했습니다.");
      router.push(`/travelproducts/${id}`);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "숙박권 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthorized) return null;

  return (
    <section className={styles.section}>
      <Script
        src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="afterInteractive"
      />
      <div className={styles.container}>
        <h1 className={styles.heading}>숙박권 판매하기</h1>
        <form className={styles.form} onSubmit={handleSubmit}>
          <FormField label="상품명" required>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="상품명을 입력해 주세요." />
          </FormField>
          <FormField label="한줄 요약" required>
            <input value={remarks} onChange={(e) => setRemarks(e.target.value)} placeholder="상품을 한줄로 요약해 주세요." />
          </FormField>
          <FormField label="상품 설명" required>
            <div className={styles.editor}>
              <div className={styles.toolbar} aria-hidden="true">
                {TOOLBAR_ITEMS.map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}
              </div>
              <textarea value={contents} onChange={(e) => setContents(e.target.value)} placeholder="내용을 입력해 주세요." />
            </div>
          </FormField>
          <FormField label="판매 가격" required>
            <input value={price} onChange={(e) => setPrice(e.target.value.replace(/\D/g, ""))} inputMode="numeric" placeholder="판매 가격을 입력해 주세요. (원 단위)" />
          </FormField>
          <FormField label="태그 입력">
            <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="태그를 입력해 주세요." />
          </FormField>

          <div className={styles.locationSection}>
            <div className={styles.addressFields}>
              <span className={styles.label}>주소 <em>*</em></span>
              <div className={styles.zipRow}>
                <input value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder="01234" />
                <button type="button" onClick={handlePostcodeSearch} disabled={isLocating}>
                  우편번호 검색
                </button>
              </div>
              <input value={address} onChange={(e) => setAddress(e.target.value)} onBlur={() => { if (address.trim()) void findLocation(); }} placeholder="주소를 입력해 주세요." />
              <input value={addressDetail} onChange={(e) => setAddressDetail(e.target.value)} placeholder="상세주소를 입력해 주세요." />
              <label>위도(LAT)<input value={coordinates?.latitude ?? ""} readOnly placeholder="주소를 먼저 입력해 주세요." /></label>
              <label>경도(LNG)<input value={coordinates?.longitude ?? ""} readOnly placeholder="주소를 먼저 입력해 주세요." /></label>
            </div>
            <div className={styles.mapColumn}>
              <span className={styles.label}>상세 위치</span>
              <div className={styles.mapWrap}>
                {coordinates ? (
                  <OpenStreetMap latitude={coordinates.latitude} longitude={coordinates.longitude} address={mapAddress} />
                ) : (
                  <p>주소를 먼저 입력해 주세요.</p>
                )}
              </div>
            </div>
          </div>

          <div className={styles.photoSection}>
            <span className={styles.label}>사진 첨부</span>
            <label className={styles.uploadButton}>
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {imagePreview ? <Image src={imagePreview} alt="숙박권 미리보기" fill className={styles.preview} /> : <><b>＋</b><span>클릭해서 사진 업로드</span></>}
            </label>
          </div>

          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton} onClick={() => router.push("/travelproducts")}>취소</button>
            <button type="submit" className={styles.submitButton} disabled={!canSubmit || isSubmitting}>{isSubmitting ? "등록 중..." : "등록하기"}</button>
          </div>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return <label className={styles.field}><span className={styles.label}>{label} {required && <em>*</em>}</span>{children}</label>;
}
