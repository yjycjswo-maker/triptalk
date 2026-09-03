export function hasAccessToken() {
  const token = localStorage.getItem("accessToken");
  if (!token) return false;

  try {
    const payload = JSON.parse(
      atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")),
    ) as { exp?: number };

    if (payload.exp && payload.exp * 1000 <= Date.now()) {
      localStorage.removeItem("accessToken");
      return false;
    }
  } catch {
    // JWT 형식이 아닌 토큰은 서버 검증에 맡깁니다.
  }

  return true;
}

export function requireLogin(router: { push: (href: string) => void }, returnTo: string) {
  if (hasAccessToken()) return true;
  router.push(`/login?returnTo=${encodeURIComponent(returnTo)}`);
  return false;
}

export function getSafeReturnTo(search: string) {
  const returnTo = new URLSearchParams(search).get("returnTo");
  return returnTo?.startsWith("/") && !returnTo.startsWith("//")
    ? returnTo
    : "/trip-talk";
}
