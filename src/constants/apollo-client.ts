import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { API_URL } from "./urls";
import { onError } from "@apollo/client/link/error";
import { excludedRoutes } from "./excluded-routes";
import { LOCAL_STORAGE_KEYS } from "./local-storage-keys";
import { onLogout } from "../utils/logout";

const link = onError((error) => {
  if (error.graphQLErrors) {
    const statusCode = error.graphQLErrors[0]?.extensions?.code;
    const getCurrentPath = window.location.pathname;
    localStorage.setItem(LOCAL_STORAGE_KEYS.prevPage, getCurrentPath); // to redirect after login

    const isExcludedPath = excludedRoutes.includes(getCurrentPath);
    if (isExcludedPath) return;

    if (statusCode === 401) {
      onLogout();
    }
  }
});

const httpLink = new HttpLink({
  uri: `${API_URL}/graphql`,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link.concat(httpLink),
});

export default client;
