import { gql } from "@apollo/client";

// Read Data
export const GET_USERS = gql`
  query user {
    users(order_by: { timeStamp: asc }) {
      uuid
      avatar
      firstName
      lastName
      nim
      address
    }
  }
`;

// Create Data
export const ADD_USER = gql`
  mutation user($object: users_insert_input!) {
    insert_users_one(object: $object) {
      uuid
    }
  }
`;

// Update Data
export const UPDATE_USER = gql`
  mutation user($pk_columns: users_pk_columns_input!, $_set: users_set_input!) {
    update_users_by_pk(pk_columns: $pk_columns, _set: $_set) {
      uuid
    }
  }
`;

// Delete Data
export const DELETE_USER = gql`
  mutation user($uuid: uuid!) {
    delete_users_by_pk(uuid: $uuid) {
      uuid
    }
  }
`;
