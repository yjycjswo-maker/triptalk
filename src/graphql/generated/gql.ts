/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n": typeof types.CreateBoardDocument,
    "\n  mutation CreateTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n": typeof types.CreateTravelproductDocument,
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": typeof types.LoginUserDocument,
    "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      _id\n      picture\n    }\n  }\n": typeof types.UpdateUserPictureDocument,
    "\n  mutation CreateTravelproductQuestion(\n    $travelproductId: ID!\n    $input: CreateTravelproductQuestionInput!\n  ) {\n    createTravelproductQuestion(\n      travelproductId: $travelproductId\n      createTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n": typeof types.CreateTravelproductQuestionDocument,
    "\n  mutation UpdateTravelproductQuestion(\n    $travelproductQuestionId: ID!\n    $input: UpdateTravelproductQuestionInput!\n  ) {\n    updateTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n      updateTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n": typeof types.UpdateTravelproductQuestionDocument,
    "\n  mutation DeleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n    )\n  }\n": typeof types.DeleteTravelproductQuestionDocument,
    "\n  mutation CreateTravelproductQuestionAnswer(\n    $travelproductQuestionId: ID!\n    $input: CreateTravelproductQuestionAnswerInput!\n  ) {\n    createTravelproductQuestionAnswer(\n      travelproductQuestionId: $travelproductQuestionId\n      createTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n": typeof types.CreateTravelproductQuestionAnswerDocument,
    "\n  mutation UpdateTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n    $input: UpdateTravelproductQuestionAnswerInput!\n  ) {\n    updateTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n      updateTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n": typeof types.UpdateTravelproductQuestionAnswerDocument,
    "\n  mutation DeleteTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n  ) {\n    deleteTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n    )\n  }\n": typeof types.DeleteTravelproductQuestionAnswerDocument,
    "\n  mutation ResetUserPassword($password: String!) {\n    resetUserPassword(password: $password)\n  }\n": typeof types.ResetUserPasswordDocument,
    "\n  query FetchBoards(\n    $page: Int\n    $search: String\n    $startDate: DateTime\n    $endDate: DateTime\n  ) {\n    fetchBoards(\n      page: $page\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      createdAt    # 작성일시\n    }\n    fetchBoardsCount(\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    )\n  }\n": typeof types.FetchBoardsDocument,
    "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      youtubeUrl\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt    # 작성일시\n    }\n  }\n": typeof types.FetchBoardDocument,
    "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id          # 유저 고유 ID\n      email        # 유저 이메일\n      name         # 유저 이름\n      picture      # 유저 프로필 사진\n      userPoint {\n        amount     # 보유 포인트 잔액\n      }\n    }\n  }\n": typeof types.FetchUserLoggedInDocument,
    "\n  query FetchTravelproducts(\n    $page: Int\n    $search: String\n    $isSoldout: Boolean\n  ) {\n    fetchTravelproducts(page: $page, search: $search, isSoldout: $isSoldout) {\n      _id\n      name\n      remarks\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n    }\n  }\n": typeof types.FetchTravelproductsDocument,
    "\n  query FetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      pickedCount\n      images\n    }\n  }\n": typeof types.FetchTravelproductsOfTheBestDocument,
    "\n  query FetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n      travelproductAddress {\n        zipcode\n        address\n        addressDetail\n        lat\n        lng\n      }\n    }\n  }\n": typeof types.FetchTravelproductDocument,
    "\n  query FetchTravelproductQuestions($travelproductId: ID!, $page: Int) {\n    fetchTravelproductQuestions(\n      travelproductId: $travelproductId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n": typeof types.FetchTravelproductQuestionsDocument,
    "\n  query FetchTravelproductQuestionAnswers(\n    $travelproductQuestionId: ID!\n    $page: Int\n  ) {\n    fetchTravelproductQuestionAnswers(\n      travelproductQuestionId: $travelproductQuestionId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n": typeof types.FetchTravelproductQuestionAnswersDocument,
};
const documents: Documents = {
    "\n  mutation CreateBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n": types.CreateBoardDocument,
    "\n  mutation CreateTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n": types.CreateTravelproductDocument,
    "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      _id\n      picture\n    }\n  }\n": types.UpdateUserPictureDocument,
    "\n  mutation CreateTravelproductQuestion(\n    $travelproductId: ID!\n    $input: CreateTravelproductQuestionInput!\n  ) {\n    createTravelproductQuestion(\n      travelproductId: $travelproductId\n      createTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n": types.CreateTravelproductQuestionDocument,
    "\n  mutation UpdateTravelproductQuestion(\n    $travelproductQuestionId: ID!\n    $input: UpdateTravelproductQuestionInput!\n  ) {\n    updateTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n      updateTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n": types.UpdateTravelproductQuestionDocument,
    "\n  mutation DeleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n    )\n  }\n": types.DeleteTravelproductQuestionDocument,
    "\n  mutation CreateTravelproductQuestionAnswer(\n    $travelproductQuestionId: ID!\n    $input: CreateTravelproductQuestionAnswerInput!\n  ) {\n    createTravelproductQuestionAnswer(\n      travelproductQuestionId: $travelproductQuestionId\n      createTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n": types.CreateTravelproductQuestionAnswerDocument,
    "\n  mutation UpdateTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n    $input: UpdateTravelproductQuestionAnswerInput!\n  ) {\n    updateTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n      updateTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n": types.UpdateTravelproductQuestionAnswerDocument,
    "\n  mutation DeleteTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n  ) {\n    deleteTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n    )\n  }\n": types.DeleteTravelproductQuestionAnswerDocument,
    "\n  mutation ResetUserPassword($password: String!) {\n    resetUserPassword(password: $password)\n  }\n": types.ResetUserPasswordDocument,
    "\n  query FetchBoards(\n    $page: Int\n    $search: String\n    $startDate: DateTime\n    $endDate: DateTime\n  ) {\n    fetchBoards(\n      page: $page\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      createdAt    # 작성일시\n    }\n    fetchBoardsCount(\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    )\n  }\n": types.FetchBoardsDocument,
    "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      youtubeUrl\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt    # 작성일시\n    }\n  }\n": types.FetchBoardDocument,
    "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id          # 유저 고유 ID\n      email        # 유저 이메일\n      name         # 유저 이름\n      picture      # 유저 프로필 사진\n      userPoint {\n        amount     # 보유 포인트 잔액\n      }\n    }\n  }\n": types.FetchUserLoggedInDocument,
    "\n  query FetchTravelproducts(\n    $page: Int\n    $search: String\n    $isSoldout: Boolean\n  ) {\n    fetchTravelproducts(page: $page, search: $search, isSoldout: $isSoldout) {\n      _id\n      name\n      remarks\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n    }\n  }\n": types.FetchTravelproductsDocument,
    "\n  query FetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      pickedCount\n      images\n    }\n  }\n": types.FetchTravelproductsOfTheBestDocument,
    "\n  query FetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n      travelproductAddress {\n        zipcode\n        address\n        addressDetail\n        lat\n        lng\n      }\n    }\n  }\n": types.FetchTravelproductDocument,
    "\n  query FetchTravelproductQuestions($travelproductId: ID!, $page: Int) {\n    fetchTravelproductQuestions(\n      travelproductId: $travelproductId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n": types.FetchTravelproductQuestionsDocument,
    "\n  query FetchTravelproductQuestionAnswers(\n    $travelproductQuestionId: ID!\n    $page: Int\n  ) {\n    fetchTravelproductQuestionAnswers(\n      travelproductQuestionId: $travelproductQuestionId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n": types.FetchTravelproductQuestionAnswersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTravelproduct(\n    $createTravelproductInput: CreateTravelproductInput!\n  ) {\n    createTravelproduct(createTravelproductInput: $createTravelproductInput) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation LoginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($createUserInput: CreateUserInput!) {\n    createUser(createUserInput: $createUserInput) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      _id\n      picture\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {\n    updateUser(updateUserInput: $updateUserInput) {\n      _id\n      picture\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTravelproductQuestion(\n    $travelproductId: ID!\n    $input: CreateTravelproductQuestionInput!\n  ) {\n    createTravelproductQuestion(\n      travelproductId: $travelproductId\n      createTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTravelproductQuestion(\n    $travelproductId: ID!\n    $input: CreateTravelproductQuestionInput!\n  ) {\n    createTravelproductQuestion(\n      travelproductId: $travelproductId\n      createTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTravelproductQuestion(\n    $travelproductQuestionId: ID!\n    $input: UpdateTravelproductQuestionInput!\n  ) {\n    updateTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n      updateTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTravelproductQuestion(\n    $travelproductQuestionId: ID!\n    $input: UpdateTravelproductQuestionInput!\n  ) {\n    updateTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n      updateTravelproductQuestionInput: $input\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n    )\n  }\n"): (typeof documents)["\n  mutation DeleteTravelproductQuestion($travelproductQuestionId: ID!) {\n    deleteTravelproductQuestion(\n      travelproductQuestionId: $travelproductQuestionId\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateTravelproductQuestionAnswer(\n    $travelproductQuestionId: ID!\n    $input: CreateTravelproductQuestionAnswerInput!\n  ) {\n    createTravelproductQuestionAnswer(\n      travelproductQuestionId: $travelproductQuestionId\n      createTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateTravelproductQuestionAnswer(\n    $travelproductQuestionId: ID!\n    $input: CreateTravelproductQuestionAnswerInput!\n  ) {\n    createTravelproductQuestionAnswer(\n      travelproductQuestionId: $travelproductQuestionId\n      createTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n    $input: UpdateTravelproductQuestionAnswerInput!\n  ) {\n    updateTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n      updateTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n    $input: UpdateTravelproductQuestionAnswerInput!\n  ) {\n    updateTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n      updateTravelproductQuestionAnswerInput: $input\n    ) {\n      _id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n  ) {\n    deleteTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n    )\n  }\n"): (typeof documents)["\n  mutation DeleteTravelproductQuestionAnswer(\n    $travelproductQuestionAnswerId: ID!\n  ) {\n    deleteTravelproductQuestionAnswer(\n      travelproductQuestionAnswerId: $travelproductQuestionAnswerId\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ResetUserPassword($password: String!) {\n    resetUserPassword(password: $password)\n  }\n"): (typeof documents)["\n  mutation ResetUserPassword($password: String!) {\n    resetUserPassword(password: $password)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchBoards(\n    $page: Int\n    $search: String\n    $startDate: DateTime\n    $endDate: DateTime\n  ) {\n    fetchBoards(\n      page: $page\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      createdAt    # 작성일시\n    }\n    fetchBoardsCount(\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    )\n  }\n"): (typeof documents)["\n  query FetchBoards(\n    $page: Int\n    $search: String\n    $startDate: DateTime\n    $endDate: DateTime\n  ) {\n    fetchBoards(\n      page: $page\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    ) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      createdAt    # 작성일시\n    }\n    fetchBoardsCount(\n      search: $search\n      startDate: $startDate\n      endDate: $endDate\n    )\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      youtubeUrl\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt    # 작성일시\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id          # 게시글 고유 ID\n      writer       # 작성자 이름\n      title        # 게시글 제목\n      contents     # 게시글 내용\n      likeCount    # 좋아요 개수\n      images       # 첨부된 이미지 목록\n      youtubeUrl\n      boardAddress {\n        zipcode\n        address\n        addressDetail\n      }\n      createdAt    # 작성일시\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id          # 유저 고유 ID\n      email        # 유저 이메일\n      name         # 유저 이름\n      picture      # 유저 프로필 사진\n      userPoint {\n        amount     # 보유 포인트 잔액\n      }\n    }\n  }\n"): (typeof documents)["\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id          # 유저 고유 ID\n      email        # 유저 이메일\n      name         # 유저 이름\n      picture      # 유저 프로필 사진\n      userPoint {\n        amount     # 보유 포인트 잔액\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTravelproducts(\n    $page: Int\n    $search: String\n    $isSoldout: Boolean\n  ) {\n    fetchTravelproducts(page: $page, search: $search, isSoldout: $isSoldout) {\n      _id\n      name\n      remarks\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchTravelproducts(\n    $page: Int\n    $search: String\n    $isSoldout: Boolean\n  ) {\n    fetchTravelproducts(page: $page, search: $search, isSoldout: $isSoldout) {\n      _id\n      name\n      remarks\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      pickedCount\n      images\n    }\n  }\n"): (typeof documents)["\n  query FetchTravelproductsOfTheBest {\n    fetchTravelproductsOfTheBest {\n      _id\n      name\n      remarks\n      price\n      pickedCount\n      images\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n      travelproductAddress {\n        zipcode\n        address\n        addressDetail\n        lat\n        lng\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchTravelproduct($travelproductId: ID!) {\n    fetchTravelproduct(travelproductId: $travelproductId) {\n      _id\n      name\n      remarks\n      contents\n      price\n      tags\n      pickedCount\n      images\n      seller {\n        _id\n        name\n        picture\n      }\n      travelproductAddress {\n        zipcode\n        address\n        addressDetail\n        lat\n        lng\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTravelproductQuestions($travelproductId: ID!, $page: Int) {\n    fetchTravelproductQuestions(\n      travelproductId: $travelproductId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchTravelproductQuestions($travelproductId: ID!, $page: Int) {\n    fetchTravelproductQuestions(\n      travelproductId: $travelproductId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FetchTravelproductQuestionAnswers(\n    $travelproductQuestionId: ID!\n    $page: Int\n  ) {\n    fetchTravelproductQuestionAnswers(\n      travelproductQuestionId: $travelproductQuestionId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query FetchTravelproductQuestionAnswers(\n    $travelproductQuestionId: ID!\n    $page: Int\n  ) {\n    fetchTravelproductQuestionAnswers(\n      travelproductQuestionId: $travelproductQuestionId\n      page: $page\n    ) {\n      _id\n      contents\n      createdAt\n      user {\n        _id\n        name\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;