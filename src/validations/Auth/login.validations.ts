import { string,object } from "yup";

const loginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export { loginSchema };
