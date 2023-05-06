import React, { useEffect } from "react";
import { useGetContentful } from "../../hooks/useContentful";
import Gap from "../../components/gap/Gap";
import { Card } from "antd";
import ReactGoogleSlides from "react-google-slides";

const Contentful = () => {
  const [isLoading, data, getData] = useGetContentful();

  console.log(typeof data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Contentful</h1>
      <Gap height={20} />

      {data?.map((item, idx) => (
        <Card key={idx} title={item.fields.title}>
          <ReactGoogleSlides
            width={640}
            height={480}
            slidesLink={item.fields.moduleLink}
            showControls
          />
        </Card>
      ))}
    </>
  );
};

export default Contentful;
