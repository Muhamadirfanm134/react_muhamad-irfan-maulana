import { useCallback, useState } from "react";
import { api } from "../../../api";
import { notification } from "antd";

export const useGetUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const res = await api.getUsers();
      setData(res.data);
    } catch (err) {
      notification.error({ message: "Gagal!", description: `${err?.message}` });
    } finally {
      setIsLoading(false);
      notification.success({
        message: "Success!",
        description: "Berhasil fetch user data",
      });
    }
  }, []);

  return [isLoading, data, getData];
};
