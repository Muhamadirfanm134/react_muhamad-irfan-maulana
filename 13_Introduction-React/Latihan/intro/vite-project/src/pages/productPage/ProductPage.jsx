import React, { useState } from "react";
import Gap from "../../components/gap/Gap";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT } from "./query/product-query";
import { Card, Col, Input, Row } from "antd";
import LoadingComponent from "../../components/loadingComponent/LoadingComponent";
import { SearchOutlined } from "@ant-design/icons";

const ProductPage = () => {
  // Get Data
  const {
    data: productData,
    loading: isProductLoading,
    error: productError,
  } = useQuery(GET_PRODUCT);

  const [data = productData?.product, setData] = useState();

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    const new_data = [...data];

    const newData = new_data.filter((item) => {
      const isMatchProduct = item.productName.toLowerCase().includes(value);
      return isMatchProduct;
    });

    setData(newData);
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
          <Row gutter={[10]}>
            {data?.map((item) => (
              <Col key={item.uuid} span={12}>
                <Card title={item.productName} style={{ margin: "20px" }}>
                  <div>
                    <b>{item.price}</b>
                  </div>
                  <div>{item.stock}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default ProductPage;
