import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_PRODUCT_BY_PK } from "../query/product-query";
import Gap from "../../../components/gap/Gap";

const ProductDetail = () => {
  const { uuid } = useParams();

  // Get Product by uuid (pk)
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT_BY_PK, {
    variables: { uuid },
  });

  return (
    <>
      <h1>Product Detail</h1>
      <Gap height={20} />

      <img
        src={productData?.product_by_pk?.image}
        alt="product-image"
        style={{ height: "300px" }}
      />
      <Gap height={20} />
      <h3>{productData?.product_by_pk?.productName}</h3>
      <div>
        Rp {productData?.product_by_pk?.price} | Stock:
        {productData?.product_by_pk?.stock}
      </div>
      <Gap height={10} />
      <p>{productData?.product_by_pk?.productDesc}</p>
    </>
  );
};

export default ProductDetail;
