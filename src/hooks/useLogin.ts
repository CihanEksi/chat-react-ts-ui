import { useState } from "react";
import { API_URL } from "../constants/urls";
import { useGetMe } from "./useGetMe";
interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { refetch } = useGetMe();

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
        console.log("error", res);
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
      localStorage.setItem("token", token);
      refetch();
    } catch (error) {
      setError(true);
      setErrorMessage("An error occurred");
    }
  };

  return { login, error, errorMessage };
};
