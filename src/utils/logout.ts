import client from "../constants/apollo-client";
import { stateKeysToClean } from "../constants/state.keys";

const onLogout = () => {
  stateKeysToClean.forEach((key) => {
    localStorage.removeItem(key);
  });
  client.resetStore();
  window.location.href = "/login";
};
export { onLogout };
