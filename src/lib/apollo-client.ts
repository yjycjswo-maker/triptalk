import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// 실제 GraphQL 서버 주소
const httpLink = new HttpLink({
  uri: "/api",
  credentials: "same-origin",
});

// 로그인 후 저장해둔 토큰을 모든 요청 헤더에 자동으로 붙여주는 링크
// (지금은 로그인 기능이 아직 없어서 토큰이 없으면 그냥 빈 헤더로 요청됨)
const PUBLIC_OPERATION_NAMES = new Set(["LoginUser", "CreateUser"]);

const authLink = setContext((operation, { headers }) => {
  if (
    operation.operationName &&
    PUBLIC_OPERATION_NAMES.has(operation.operationName)
  ) {
    return { headers };
  }

  const token =
    typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

  return {
    headers: {
      ...headers,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  };
});

export const apolloClient = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
});
