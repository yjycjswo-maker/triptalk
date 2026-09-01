"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { FETCH_USER_LOGGED_IN } from "@/graphql/queries";
import ProfileCard from "@/components/mypage/profile-card";

type FetchUserLoggedInData = {
  fetchUserLoggedIn: {
    name: string;
    picture: string | null;
    userPoint: {
      amount: number;
    } | null;
  };
};

type UserProfileProps = {
  activeMenu?: "history" | "point" | "password";
};

export default function UserProfile({ activeMenu }: UserProfileProps) {
  const router = useRouter();
  const hasAccessToken =
    typeof window !== "undefined" && Boolean(localStorage.getItem("accessToken"));

  const { data, loading, error } = useQuery<FetchUserLoggedInData>(
    FETCH_USER_LOGGED_IN,
    {
      skip: !hasAccessToken,
      fetchPolicy: "network-only",
    },
  );

  useEffect(() => {
    if (!hasAccessToken || error) {
      router.replace("/login");
    }
  }, [error, hasAccessToken, router]);

  if (!hasAccessToken || loading || error || !data) {
    return <p>사용자 정보를 불러오는 중입니다.</p>;
  }

  return (
    <ProfileCard
      name={data.fetchUserLoggedIn.name}
      avatar={
        data.fetchUserLoggedIn.picture?.startsWith("/img/profile/")
          ? data.fetchUserLoggedIn.picture
          : "/img/profile/img.png"
      }
      point={data.fetchUserLoggedIn.userPoint?.amount ?? 0}
      activeMenu={activeMenu}
    />
  );
}
