"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import Header from "@/components/commons/header";
import StayDetail from "@/components/travelproducts/detail";
import { FetchTravelproductDocument } from "@/graphql/generated/graphql";
import { getStorageImageUrl } from "@/lib/storage-image";

export default function StayDetailPage() {
  const params = useParams<{ id: string }>();
  const { data, loading, error } = useQuery(FetchTravelproductDocument, {
    variables: { travelproductId: params.id },
    skip: !params.id,
  });
  const product = data?.fetchTravelproduct;

  const images = (product?.images ?? [])
    .map(getStorageImageUrl)
    .filter((image): image is string => Boolean(image));
  const displayImages =
    images.length > 0 ? images : ["/img/Purchase/Purchase-1.png"];
  const address = [
    product?.travelproductAddress?.address,
    product?.travelproductAddress?.addressDetail,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <Header />
      <main>
        {loading && <p>숙박권 정보를 불러오는 중입니다.</p>}
        {error && <p>숙박권 정보를 불러오지 못했습니다.</p>}
        {product && (
          <StayDetail
            travelproductId={product._id}
            title={product.name}
            subtitle={product.remarks}
            tags={product.tags ?? []}
            photoCount={product.pickedCount ?? 0}
            images={displayImages}
            price={`${(product.price ?? 0).toLocaleString("ko-KR")}원`}
            purchaseNotes={[
              "숙박권은 트립트립에서 포인트 충전 후 구매하실 수 있습니다.",
              "상세 설명에 숙박권 사용기한을 꼭 확인해 주세요.",
            ]}
            seller={{
              name: product.seller?.name ?? "판매자",
              avatar:
                getStorageImageUrl(product.seller?.picture) ??
                "/img/profile/avatar-1.png",
            }}
            description={[product.contents]}
            address={address}
            coordinates={{
              latitude: product.travelproductAddress?.lat ?? 37.5665,
              longitude: product.travelproductAddress?.lng ?? 126.978,
            }}
          />
        )}
      </main>
    </>
  );
}
