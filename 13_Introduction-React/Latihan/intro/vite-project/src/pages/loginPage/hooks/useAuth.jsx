import { useCallback, useState } from "react";
import { api } from "../../../api";
import { message } from "antd";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.login(body);

      console.log({ res });

      if (res) {
        localStorage.setItem("access_token", res.data?.access_token);
        message.open({
          type: "success",
          content: "Berhasil Login",
        });
        onSuccess && onSuccess();
      }
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, login];
};

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
