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
