import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query product {
    product(order_by: { timeStamp: asc }) {
      price
      productName
      stock
      timeStamp
      uuid
    }
  }
`;

export const GET_PRODUCT_BY_PK = gql`
  query product($uuid: uuid!) {
    product_by_pk(uuid: $uuid) {
      image
      price
      productDesc
      productName
      stock
      timeStamp
      uuid
    }
  }
`;
