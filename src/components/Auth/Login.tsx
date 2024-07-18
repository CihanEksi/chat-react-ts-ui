import { Link } from "react-router-dom";
import Auth from "./Auth";
import { Link as MULink } from "@mui/material";
import { useLogin } from "../../hooks/useLogin";
import useGeneralStore from "../../managers/stateManager/general.zustand";
import { useEffect } from "react";
import router from "../../routes/Routes";
import { LOCAL_STORAGE_KEYS } from "../../constants/local-storage-keys";

const Login = () => {
  const { login, error, errorMessage } = useLogin();
  const me = useGeneralStore((state) => state.me);

  useEffect(() => {
    if (me) {
      let navigateTo = "/";
      const getPrevPath = localStorage.getItem(LOCAL_STORAGE_KEYS.prevPage);

      if (getPrevPath) {
        navigateTo = getPrevPath;
        localStorage.removeItem(LOCAL_STORAGE_KEYS.prevPage);
      }

      router.navigate(navigateTo);
    }
  }, [me]);

  return (
    <div>
      <Auth
        submitLabel="Login"
        error={error ? errorMessage : undefined}
        onSubmit={async (credentials) => login(credentials)}
      >
        <MULink
          component={Link}
          to="/signup"
          style={{
            alignSelf: "center",
          }}
        >
          Don't have an account? Signup
        </MULink>
      </Auth>
    </div>
  );
};

export default Login;
