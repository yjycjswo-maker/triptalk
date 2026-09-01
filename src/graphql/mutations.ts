import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

export const UPDATE_USER_PICTURE = gql`
  mutation UpdateUserPicture($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      _id
      picture
    }
  }
`;

export const CREATE_TRAVELPRODUCT_QUESTION = gql`
  mutation CreateTravelproductQuestion(
    $travelproductId: ID!
    $input: CreateTravelproductQuestionInput!
  ) {
    createTravelproductQuestion(
      travelproductId: $travelproductId
      createTravelproductQuestionInput: $input
    ) {
      _id
    }
  }
`;

export const UPDATE_TRAVELPRODUCT_QUESTION = gql`
  mutation UpdateTravelproductQuestion(
    $travelproductQuestionId: ID!
    $input: UpdateTravelproductQuestionInput!
  ) {
    updateTravelproductQuestion(
      travelproductQuestionId: $travelproductQuestionId
      updateTravelproductQuestionInput: $input
    ) {
      _id
    }
  }
`;

export const DELETE_TRAVELPRODUCT_QUESTION = gql`
  mutation DeleteTravelproductQuestion($travelproductQuestionId: ID!) {
    deleteTravelproductQuestion(
      travelproductQuestionId: $travelproductQuestionId
    )
  }
`;

export const CREATE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation CreateTravelproductQuestionAnswer(
    $travelproductQuestionId: ID!
    $input: CreateTravelproductQuestionAnswerInput!
  ) {
    createTravelproductQuestionAnswer(
      travelproductQuestionId: $travelproductQuestionId
      createTravelproductQuestionAnswerInput: $input
    ) {
      _id
    }
  }
`;

export const UPDATE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation UpdateTravelproductQuestionAnswer(
    $travelproductQuestionAnswerId: ID!
    $input: UpdateTravelproductQuestionAnswerInput!
  ) {
    updateTravelproductQuestionAnswer(
      travelproductQuestionAnswerId: $travelproductQuestionAnswerId
      updateTravelproductQuestionAnswerInput: $input
    ) {
      _id
    }
  }
`;

export const DELETE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation DeleteTravelproductQuestionAnswer(
    $travelproductQuestionAnswerId: ID!
  ) {
    deleteTravelproductQuestionAnswer(
      travelproductQuestionAnswerId: $travelproductQuestionAnswerId
    )
  }
`;

export const RESET_USER_PASSWORD = gql`
  mutation ResetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;
