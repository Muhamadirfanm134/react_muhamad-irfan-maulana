import { gql } from "@apollo/client";

export const GET_PROFILE = gql`
  query profile {
    profile {
      username
      password
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation profile($object: profile_insert_input!) {
    insert_profile_one(object: $object) {
      uuid
      username
    }
  }
`;
