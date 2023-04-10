import { gql } from "@apollo/client";

// Read Data
export const GET_USERS = gql`
  query user {
    users(order_by: { timeStamp: asc }) {
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
  mutation user($object: users_insert_input!) {
    insert_users_one(object: $object) {
      id
    }
  }
`;

// Update Data
export const UPDATE_USER = gql`
  mutation user($pk_columns: users_pk_columns_input!, $_set: users_set_input!) {
    update_users_by_pk(pk_columns: $pk_columns, _set: $_set) {
      id
    }
  }
`;

// Delete Data
export const DELETE_USER = gql`
  mutation user($id: uuid!) {
    delete_users_by_pk(id: $id) {
      id
    }
  }
`;
