import React, { useState } from "react";
import Gap from "../../components/gap/Gap";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./query/product-query";
import { Card, Col, Input, Result, Row } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProductPage = () => {
  // Get Data
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);

  const [data = productData?.product, setData] = useState();

  const handleSearch = (e) => {
    const value = e.target.value;

    setData(
      productData?.product.filter((item) => {
        const isMatchProduct = value
          ? item.productName.toLowerCase().includes(value.toLowerCase())
          : true;

        return isMatchProduct;
      })
    );
  };

  return (
    <>
      {isProductLoading ? (
        <LoadingComponent />
      ) : (
        <>
          <h1>Product List</h1>
          <Gap height={20} />

          <Input
            placeholder="Search Product Here"
            prefix={<SearchOutlined />}
            onChange={handleSearch}
          />

          <Gap height={20} />

          {data.length > 0 ? (
            <Row gutter={[10]} justify="start">
              {data?.map((item) => (
                <Col key={item.uuid} span={12}>
                  <Link to={`/product/${item.uuid}`}>
                    <Card title={item.productName} style={{ margin: "20px" }}>
                      <div>
                        <b>{item.price}</b>
                      </div>
                      <div>{item.stock}</div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          ) : (
            <Row justify="center">
              <Result status="404" subTitle="Product not found" />
            </Row>
          )}
        </>
      )}
    </>
  );
};

export default ProductPage;
