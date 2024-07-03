import { Link as RouterLink } from "react-router-dom";
import Auth from "./Auth";
import Link from "@mui/material/Link";
import useCreateUser from "../hooks/useCreateUser";

interface SubmitParams {
  email: string;
  password: string;
}
const Signup = () => {
  const [createUser] = useCreateUser();

  const onSubmit = async ({ email, password }: SubmitParams) => {
    await createUser({
      variables: {
        createUserInput: {
          email: email,
          password: password,
        },
      },
    });
  };

  return (
    <Auth submitLabel="Signup" onSubmit={onSubmit}>
      <Link
        to="/login"
        style={{
          alignSelf: "center",
        }}
        component={RouterLink}
      >
        Do you have an account? Login.
      </Link>
    </Auth>
  );
};

export default Signup;
