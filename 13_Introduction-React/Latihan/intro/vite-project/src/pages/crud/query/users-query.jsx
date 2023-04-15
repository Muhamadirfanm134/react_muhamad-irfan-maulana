import { gql } from "@apollo/client";

// Read Data
export const GET_USERS = gql`
  query user {
    user(order_by: { timeStamp: asc }) {
      address
      firstName
      lastName
      nim
      id
    }
  }
`;

// Create Data
export const ADD_USER = gql`
  mutation user($object: user_insert_input!) {
    insert_user_one(object: $object) {
      id
    }
  }
`;

// Update Data
export const UPDATE_USER = gql`
  mutation user($pk_columns: user_pk_columns_input!, $_set: user_set_input!) {
    update_user_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;

// Delete Data
export const DELETE_USER = gql`
  mutation user($id: uuid!) {
    delete_user_by_pk(id: $id) {
      id
    }
  }
`;
