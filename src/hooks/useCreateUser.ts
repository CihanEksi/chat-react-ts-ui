import { gql } from "@apollo/client";
import { User } from "../models/User.model";
import { useApolloMutation } from "../apollo/gql.action";

interface CreateUserInput {
  createUserInput: {
    email: string;
    password: string;
  };
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

const useCreateUser = () => {
  return useApolloMutation<User, CreateUserInput>(CREATE_USER);
};

export default useCreateUser;
