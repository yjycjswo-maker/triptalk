import { gql } from "@apollo/client";

// 1. 게시글 목록을 조회하는 쿼리 (페이지 번호와 검색어 필터 지원)
export const FETCH_BOARDS = gql`
  query FetchBoards(
    $page: Int
    $search: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchBoards(
      page: $page
      search: $search
      startDate: $startDate
      endDate: $endDate
    ) {
      _id          # 게시글 고유 ID
      writer       # 작성자 이름
      title        # 게시글 제목
      contents     # 게시글 내용
      likeCount    # 좋아요 개수
      images       # 첨부된 이미지 목록
      createdAt    # 작성일시
    }
    fetchBoardsCount(
      search: $search
      startDate: $startDate
      endDate: $endDate
    )
  }
`;

// 2. 특정 게시글의 상세 정보를 조회하는 쿼리 (필수 값인 boardId 필요)
export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id          # 게시글 고유 ID
      writer       # 작성자 이름
      title        # 게시글 제목
      contents     # 게시글 내용
      likeCount    # 좋아요 개수
      images       # 첨부된 이미지 목록
      youtubeUrl
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt    # 작성일시
    }
  }
`;

// 3. 현재 로그인한 사용자의 정보를 조회하는 쿼리
export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id          # 유저 고유 ID
      email        # 유저 이메일
      name         # 유저 이름
      picture      # 유저 프로필 사진
      userPoint {
        amount     # 보유 포인트 잔액
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCTS = gql`
  query FetchTravelproducts(
    $page: Int
    $search: String
    $isSoldout: Boolean
  ) {
    fetchTravelproducts(page: $page, search: $search, isSoldout: $isSoldout) {
      _id
      name
      remarks
      price
      tags
      pickedCount
      images
      seller {
        _id
        name
        picture
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCTS_OF_THE_BEST = gql`
  query FetchTravelproductsOfTheBest {
    fetchTravelproductsOfTheBest {
      _id
      name
      remarks
      price
      pickedCount
      images
    }
  }
`;

export const FETCH_TRAVELPRODUCT = gql`
  query FetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      contents
      price
      tags
      pickedCount
      images
      seller {
        _id
        name
        picture
      }
      travelproductAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCT_QUESTIONS = gql`
  query FetchTravelproductQuestions($travelproductId: ID!, $page: Int) {
    fetchTravelproductQuestions(
      travelproductId: $travelproductId
      page: $page
    ) {
      _id
      contents
      createdAt
      user {
        _id
        name
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCT_QUESTION_ANSWERS = gql`
  query FetchTravelproductQuestionAnswers(
    $travelproductQuestionId: ID!
    $page: Int
  ) {
    fetchTravelproductQuestionAnswers(
      travelproductQuestionId: $travelproductQuestionId
      page: $page
    ) {
      _id
      contents
      createdAt
      user {
        _id
        name
      }
    }
  }
`;
