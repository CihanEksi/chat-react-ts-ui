import { gql } from "@apollo/client";
import { useApolloQuery } from "../apollo/gql.action";

const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

const useGetMe = () => {
  return useApolloQuery(GET_ME);
};

export { useGetMe };
