import { gql } from "@apollo/client";
import { useApolloQuery } from "../apollo/gql.action";
import useGeneralStore from "../managers/stateManager/general.zustand";

const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

const useGetMe = () => {
  const getMe = useApolloQuery(GET_ME);
  const {setMe,me} = useGeneralStore((state) => state);
  if(getMe.data){
    setMe(me);
  }
  return {
    me,
  }
};

export { useGetMe }