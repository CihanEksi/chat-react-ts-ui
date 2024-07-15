import {
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useMutation,
  useQuery,
} from "@apollo/client";
import { getToken } from "../utils/token/token.functions";

const apolloHeaders = (token: string) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  return headers;
};

function useApolloQuery<
  TData = TypedDocumentNode,
  TVariables extends OperationVariables = OperationVariables,
>(gqlQuery: DocumentNode | TypedDocumentNode<TData, TVariables>) {
  const token = getToken();
  const headers = apolloHeaders(token);
  const options = { context: { headers } };
  return useQuery(gqlQuery, options);
}

function useApolloMutation<
  TData = TypedDocumentNode,
  TVariables = OperationVariables,
>(gqlMutation: DocumentNode | TypedDocumentNode<TData, TVariables>) {
  const token = getToken();
  const headers = apolloHeaders(token);
  const context = { headers };
  const options = { context };
  return useMutation(gqlMutation, options);
}

export { useApolloQuery, useApolloMutation };
