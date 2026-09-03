import { NextRequest, NextResponse } from "next/server";

// 백엔드 GraphQL 서버 주소 정의
const GRAPHQL_API = "https://main-practice.codebootcamp.co.kr/graphql";

// Next.js Route Handler: POST 요청을 처리하는 함수
export async function POST(request: NextRequest) {
  // JSON GraphQL 요청과 파일 업로드용 multipart 요청을 모두 그대로 전달합니다.
  const requestBody = await request.arrayBuffer();
  const contentType =
    request.headers.get("content-type") ?? "application/json";

  // 클라이언트가 보낸 요청에서 인증 헤더와 쿠키 정보를 추출
  const authorization = request.headers.get("authorization");
  const cookie = request.headers.get("cookie");

  // 백엔드로 보낼 새로운 헤더 객체 생성
  const headers = new Headers({
    "content-type": contentType,
    // 로그인 API의 Origin 오류를 방지하기 위해 출처(Origin) 정보를 설정
    origin: request.headers.get("origin") ?? request.nextUrl.origin,
  });

  // 인증 토큰이나 쿠키가 존재하면 백엔드 요청 헤더에 그대로 추가
  if (authorization) headers.set("authorization", authorization);
  if (cookie) headers.set("cookie", cookie);

  try {
    // 실제 백엔드 GraphQL API로 요청을 전달(프록시 역할)
    const apiResponse = await fetch(GRAPHQL_API, {
      method: "POST",
      headers,
      body: requestBody,
      cache: "no-store", // 캐시를 사용하지 않고 매번 최신 데이터를 요청
    });

    const responseBody = await apiResponse.text();
    let responseStatus = apiResponse.status;

    // GraphQL 서버는 입력 오류를 HTTP 400과 errors 배열로 반환할 수 있습니다.
    // Apollo Client가 errors 배열의 실제 메시지를 읽을 수 있도록 이 경우에는
    // GraphQL 규약에 맞춰 HTTP 200으로 전달합니다.
    try {
      const responseData = JSON.parse(responseBody) as { errors?: unknown[] };
      if (responseData.errors?.length) {
        responseStatus = 200;
      }
    } catch {
      // JSON이 아닌 응답은 원래 HTTP 상태 코드를 유지합니다.
    }

    const result = new NextResponse(responseBody, {
      status: responseStatus,
      headers: { "content-type": "application/json" },
    });

    // 로그인 성공 시 백엔드가 보낸 Refresh Token 쿠키를 추출하여 브라우저에 전달
    const setCookie = apiResponse.headers.get("set-cookie");
    if (setCookie) result.headers.set("set-cookie", setCookie);

    return result;
  } catch {
    // 백엔드 서버와 통신 중 에러 발생 시 502 에러 응답 반환
    return NextResponse.json(
      { errors: [{ message: "과제용 API에 연결할 수 없어요." }] },
      { status: 502 },
    );
  }
}
