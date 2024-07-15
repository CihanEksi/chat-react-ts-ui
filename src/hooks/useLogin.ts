import { useState } from "react";
import { API_URL } from "../constants/urls";
// import { useGetMe } from "./useGetMe";
import useGeneralStore from "../managers/stateManager/general.zustand";
import { LOCAL_STORAGE_KEYS } from "../constants/local-storage-keys";
import router from "../routes/Routes";
interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { setToken, setMe } = useGeneralStore((state) => state);

  const login = async (request: LoginRequest) => {
    try {
      const url = `${API_URL}/auth/login`;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      };
      const res = await fetch(url, requestOptions);
      const data = await res.json();
      const dataMessage = data.message;

      if (!res.ok) {
        setError(true);

        if (dataMessage) {
          setErrorMessage(dataMessage);
        }

        return;
      }

      if (data.success === false) {
        setError(true);
        if (dataMessage) {
          setErrorMessage(dataMessage);
        }
        return;
      }

      setError(false);
      const token = data.token;
      const user = data.user;
      localStorage.setItem("token", token);
      setToken(token);
      setMe(user);

      const getPrevPath = localStorage.getItem(LOCAL_STORAGE_KEYS.prevPage);
      
      if (getPrevPath) {
        router.navigate(getPrevPath);
      }
      
    } catch (error) {
      setError(true);
      setErrorMessage("An error occurred");
    }
  };

  return { login, error, errorMessage };
};
