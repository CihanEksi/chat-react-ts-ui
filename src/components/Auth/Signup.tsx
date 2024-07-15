import { Link as RouterLink } from "react-router-dom";
import Auth from "./Auth";
import Link from "@mui/material/Link";
import useCreateUser from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessages } from "../../utils/handlers/error.handler";

interface SubmitParams {
  email: string;
  password: string;
}
const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState<string | "">("");

  const onSubmit = async ({ email, password }: SubmitParams) => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: email,
            password: password,
          },
        },
      });
      setError("");
    } catch (err: unknown) {
      const errorMessage = extractErrorMessages(err);
      if (errorMessage) {
        setError(errorMessage);
      }
    }
  };

  return (
    <>
      <Auth error={error} submitLabel="Signup" onSubmit={onSubmit}>
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
    </>
  );
};

export default Signup;
