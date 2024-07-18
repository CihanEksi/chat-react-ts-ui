import { useState } from "react";
import { API_URL } from "../constants/urls";
// import { useGetMe } from "./useGetMe";
import useGeneralStore from "../managers/stateManager/general.zustand";
import { snackVar } from "../apollo/vars/snack";
import { UNKNOWN_ERROR_ERROR_SNACK } from "../constants/error";
import { loginSchema } from "../validations/Auth/login.validations";
import { useTranslation } from "react-i18next";

interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const { t } = useTranslation();
  const [error, setError] = useState<boolean>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const { setToken, setMe } = useGeneralStore((state) => state);

  const login = async (request: LoginRequest) => {
    try {
      const isValid = loginSchema.isValidSync(request);
      if (!isValid) {
        const errorMessageTranslate = t("auth.login.invalidEmailOrPassword");
        setError(true);
        setErrorMessage(errorMessageTranslate);
        snackVar({
          severity: "error",
          message: errorMessageTranslate,
        });
        return;
      }

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
          snackVar({
            severity: "error",
            message: dataMessage,
          });
        }

        return;
      }

      if (data.success === false) {
        setError(true);
        if (dataMessage) {
          setErrorMessage(dataMessage);
          snackVar({
            severity: "error",
            message: dataMessage,
          });
        }
        return;
      }

      setError(false);
      const token = data.token;
      const user = data.user;
      localStorage.setItem("token", token);
      setToken(token);
      setMe(user);
    } catch (error) {
      const errorMessageTranslate = t("errors.unknownError");
      setError(true);
      setErrorMessage(errorMessageTranslate);
      snackVar(UNKNOWN_ERROR_ERROR_SNACK);
    }
  };

  return { login, error, errorMessage };
};
