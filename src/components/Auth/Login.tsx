import { Link } from "react-router-dom";
import Auth from "./Auth";
import { Link as MULink } from "@mui/material";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const { login, error, errorMessage } = useLogin();

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
