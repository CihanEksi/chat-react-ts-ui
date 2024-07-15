import { gql } from "@apollo/client";
import { useApolloQuery } from "../apollo/gql.action";

const GET_USERS = gql`
  query Users {
    users {
      _id
      email
    }
  }
`;

const useGetUsers = () => {
  return useApolloQuery(GET_USERS);
};

export { useGetUsers };
