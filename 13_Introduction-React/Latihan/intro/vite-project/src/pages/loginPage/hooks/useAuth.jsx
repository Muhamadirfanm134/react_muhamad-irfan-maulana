import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createProfile = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      await api.register(body);
      onSuccess && onSuccess();
      message.open({
        type: "success",
        content: "Profile baru berhasil dibuat",
      });
      setIsLoading(false);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, createProfile];
};

export const useGetProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await api.getProfile();
      setData(res.data);
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
