/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type BoardAddressInput = {
  address?: string | null | undefined;
  addressDetail?: string | null | undefined;
  zipcode?: string | null | undefined;
};

export type CreateBoardInput = {
  boardAddress?: BoardAddressInput | null | undefined;
  contents: string;
  images?: Array<string> | null | undefined;
  password?: string | null | undefined;
  title: string;
  writer?: string | null | undefined;
  youtubeUrl?: string | null | undefined;
};

export type CreateTravelproductInput = {
  contents: string;
  images?: Array<string> | null | undefined;
  name: string;
  price: number;
  remarks: string;
  tags?: Array<string> | null | undefined;
  travelproductAddress?: TravelproductAddressInput | null | undefined;
};

export type CreateTravelproductQuestionAnswerInput = {
  contents: string;
};

export type CreateTravelproductQuestionInput = {
  contents: string;
};

export type CreateUserInput = {
  email: string;
  name: string;
  password: string;
};

export type TravelproductAddressInput = {
  address?: string | null | undefined;
  addressDetail?: string | null | undefined;
  lat?: number | null | undefined;
  lng?: number | null | undefined;
  zipcode?: string | null | undefined;
};

export type UpdateTravelproductQuestionAnswerInput = {
  contents: string;
};

export type UpdateTravelproductQuestionInput = {
  contents: string;
};

export type UpdateUserInput = {
  name?: string | null | undefined;
  picture?: string | null | undefined;
};

export type CreateBoardMutationVariables = Exact<{
  createBoardInput: CreateBoardInput;
}>;


export type CreateBoardMutation = { createBoard: { _id: string } };

export type CreateTravelproductMutationVariables = Exact<{
  createTravelproductInput: CreateTravelproductInput;
}>;


export type CreateTravelproductMutation = { createTravelproduct: { _id: string } };

export type LoginUserMutationVariables = Exact<{
  email: string;
  password: string;
}>;


export type LoginUserMutation = { loginUser: { accessToken: string } };

export type CreateUserMutationVariables = Exact<{
  createUserInput: CreateUserInput;
}>;


export type CreateUserMutation = { createUser: { _id: string } };

export type UpdateUserPictureMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;


export type UpdateUserPictureMutation = { updateUser: { _id: string, picture: string | null } };

export type CreateTravelproductQuestionMutationVariables = Exact<{
  travelproductId: string | number;
  input: CreateTravelproductQuestionInput;
}>;


export type CreateTravelproductQuestionMutation = { createTravelproductQuestion: { _id: string } };

export type UpdateTravelproductQuestionMutationVariables = Exact<{
  travelproductQuestionId: string | number;
  input: UpdateTravelproductQuestionInput;
}>;


export type UpdateTravelproductQuestionMutation = { updateTravelproductQuestion: { _id: string } };

export type DeleteTravelproductQuestionMutationVariables = Exact<{
  travelproductQuestionId: string | number;
}>;


export type DeleteTravelproductQuestionMutation = { deleteTravelproductQuestion: string };

export type CreateTravelproductQuestionAnswerMutationVariables = Exact<{
  travelproductQuestionId: string | number;
  input: CreateTravelproductQuestionAnswerInput;
}>;


export type CreateTravelproductQuestionAnswerMutation = { createTravelproductQuestionAnswer: { _id: string } };

export type UpdateTravelproductQuestionAnswerMutationVariables = Exact<{
  travelproductQuestionAnswerId: string | number;
  input: UpdateTravelproductQuestionAnswerInput;
}>;


export type UpdateTravelproductQuestionAnswerMutation = { updateTravelproductQuestionAnswer: { _id: string } };

export type DeleteTravelproductQuestionAnswerMutationVariables = Exact<{
  travelproductQuestionAnswerId: string | number;
}>;


export type DeleteTravelproductQuestionAnswerMutation = { deleteTravelproductQuestionAnswer: string };

export type ResetUserPasswordMutationVariables = Exact<{
  password: string;
}>;


export type ResetUserPasswordMutation = { resetUserPassword: boolean };

export type FetchBoardsQueryVariables = Exact<{
  page?: number | null | undefined;
  search?: string | null | undefined;
  startDate?: unknown;
  endDate?: unknown;
}>;


export type FetchBoardsQuery = { fetchBoardsCount: number, fetchBoards: Array<{ _id: string, writer: string | null, title: string, contents: string, likeCount: number, images: Array<string> | null, createdAt: unknown }> };

export type FetchBoardQueryVariables = Exact<{
  boardId: string | number;
}>;


export type FetchBoardQuery = { fetchBoard: { _id: string, writer: string | null, title: string, contents: string, likeCount: number, images: Array<string> | null, youtubeUrl: string | null, createdAt: unknown, boardAddress: { zipcode: string | null, address: string | null, addressDetail: string | null } | null } };

export type FetchUserLoggedInQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUserLoggedInQuery = { fetchUserLoggedIn: { _id: string, email: string, name: string, picture: string | null, userPoint: { amount: number } | null } };

export type FetchTravelproductsQueryVariables = Exact<{
  page?: number | null | undefined;
  search?: string | null | undefined;
  isSoldout?: boolean | null | undefined;
}>;


export type FetchTravelproductsQuery = { fetchTravelproducts: Array<{ _id: string, name: string, remarks: string, price: number | null, tags: Array<string> | null, pickedCount: number | null, images: Array<string> | null, seller: { _id: string, name: string, picture: string | null } | null }> };

export type FetchTravelproductsOfTheBestQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchTravelproductsOfTheBestQuery = { fetchTravelproductsOfTheBest: Array<{ _id: string, name: string, remarks: string, price: number | null, pickedCount: number | null, images: Array<string> | null }> };

export type FetchTravelproductQueryVariables = Exact<{
  travelproductId: string | number;
}>;


export type FetchTravelproductQuery = { fetchTravelproduct: { _id: string, name: string, remarks: string, contents: string, price: number | null, tags: Array<string> | null, pickedCount: number | null, images: Array<string> | null, seller: { _id: string, name: string, picture: string | null } | null, travelproductAddress: { zipcode: string | null, address: string | null, addressDetail: string | null, lat: number | null, lng: number | null } | null } };

export type FetchTravelproductQuestionsQueryVariables = Exact<{
  travelproductId: string | number;
  page?: number | null | undefined;
}>;


export type FetchTravelproductQuestionsQuery = { fetchTravelproductQuestions: Array<{ _id: string, contents: string, createdAt: unknown, user: { _id: string, name: string } }> };

export type FetchTravelproductQuestionAnswersQueryVariables = Exact<{
  travelproductQuestionId: string | number;
  page?: number | null | undefined;
}>;


export type FetchTravelproductQuestionAnswersQuery = { fetchTravelproductQuestionAnswers: Array<{ _id: string, contents: string, createdAt: unknown, user: { _id: string, name: string } }> };


export const CreateBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createBoardInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateBoardInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createBoardInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createBoardInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateBoardMutation, CreateBoardMutationVariables>;
export const CreateTravelproductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTravelproduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createTravelproductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTravelproductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTravelproduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createTravelproductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createTravelproductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateTravelproductMutation, CreateTravelproductMutationVariables>;
export const LoginUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LoginUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<LoginUserMutation, LoginUserMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserPictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserPicture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateUserInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<UpdateUserPictureMutation, UpdateUserPictureMutationVariables>;
export const CreateTravelproductQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTravelproductQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTravelproductQuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTravelproductQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"createTravelproductQuestionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateTravelproductQuestionMutation, CreateTravelproductQuestionMutationVariables>;
export const UpdateTravelproductQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTravelproductQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTravelproductQuestionInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTravelproductQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateTravelproductQuestionInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UpdateTravelproductQuestionMutation, UpdateTravelproductQuestionMutationVariables>;
export const DeleteTravelproductQuestionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTravelproductQuestion"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTravelproductQuestion"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}}}]}]}}]} as unknown as DocumentNode<DeleteTravelproductQuestionMutation, DeleteTravelproductQuestionMutationVariables>;
export const CreateTravelproductQuestionAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTravelproductQuestionAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTravelproductQuestionAnswerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTravelproductQuestionAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"createTravelproductQuestionAnswerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<CreateTravelproductQuestionAnswerMutation, CreateTravelproductQuestionAnswerMutationVariables>;
export const UpdateTravelproductQuestionAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTravelproductQuestionAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionAnswerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTravelproductQuestionAnswerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTravelproductQuestionAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionAnswerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionAnswerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"updateTravelproductQuestionAnswerInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]}}]} as unknown as DocumentNode<UpdateTravelproductQuestionAnswerMutation, UpdateTravelproductQuestionAnswerMutationVariables>;
export const DeleteTravelproductQuestionAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteTravelproductQuestionAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionAnswerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteTravelproductQuestionAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionAnswerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionAnswerId"}}}]}]}}]} as unknown as DocumentNode<DeleteTravelproductQuestionAnswerMutation, DeleteTravelproductQuestionAnswerMutationVariables>;
export const ResetUserPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ResetUserPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resetUserPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}]}}]} as unknown as DocumentNode<ResetUserPasswordMutation, ResetUserPasswordMutationVariables>;
export const FetchBoardsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchBoards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoards"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fetchBoardsCount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"startDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"endDate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}}]}]}}]} as unknown as DocumentNode<FetchBoardsQuery, FetchBoardsQueryVariables>;
export const FetchBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchBoard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"boardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchBoard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"boardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"boardId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"writer"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"likeCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}},{"kind":"Field","name":{"kind":"Name","value":"boardAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"addressDetail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<FetchBoardQuery, FetchBoardQueryVariables>;
export const FetchUserLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchUserLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchUserLoggedIn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"userPoint"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}}]}}]}}]}}]} as unknown as DocumentNode<FetchUserLoggedInQuery, FetchUserLoggedInQueryVariables>;
export const FetchTravelproductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTravelproducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isSoldout"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"isSoldout"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isSoldout"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTravelproductsQuery, FetchTravelproductsQueryVariables>;
export const FetchTravelproductsOfTheBestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTravelproductsOfTheBest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductsOfTheBest"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<FetchTravelproductsOfTheBestQuery, FetchTravelproductsOfTheBestQueryVariables>;
export const FetchTravelproductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTravelproduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"remarks"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"tags"}},{"kind":"Field","name":{"kind":"Name","value":"pickedCount"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"travelproductAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"addressDetail"}},{"kind":"Field","name":{"kind":"Name","value":"lat"}},{"kind":"Field","name":{"kind":"Name","value":"lng"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTravelproductQuery, FetchTravelproductQueryVariables>;
export const FetchTravelproductQuestionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTravelproductQuestions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductQuestions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductId"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTravelproductQuestionsQuery, FetchTravelproductQuestionsQueryVariables>;
export const FetchTravelproductQuestionAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchTravelproductQuestionAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchTravelproductQuestionAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"travelproductQuestionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"travelproductQuestionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"contents"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FetchTravelproductQuestionAnswersQuery, FetchTravelproductQuestionAnswersQueryVariables>;