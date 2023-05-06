import { useCallback, useState } from "react";
import { client } from "../config/contentful-config";
import { message } from "antd";

// Read Data
export const useGetContentful = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await client.getEntries();
      setData(res?.items);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getData];
};
