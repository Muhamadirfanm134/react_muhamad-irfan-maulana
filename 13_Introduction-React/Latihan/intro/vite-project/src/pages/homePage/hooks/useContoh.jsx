import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

// Get Data
export const useGetAuthProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getAuthProfile();
      setData(res?.data);
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
