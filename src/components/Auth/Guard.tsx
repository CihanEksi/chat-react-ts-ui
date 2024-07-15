import { useEffect } from "react";
import { excludedRoutes } from "../../constants/excluded-routes";
import useGeneralStore from "../../managers/stateManager/general.zustand";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const me = useGeneralStore((state) => state.me);
  const includedCurrentRoute = excludedRoutes.includes(
    window.location.pathname
  );
  const isUserLoggedIn = me !== null;
  const managedCondition = !includedCurrentRoute && !isUserLoggedIn;

  useEffect(() => {
    if (managedCondition) {
      window.location.href = "/login";
    }
  }, [managedCondition]);

  if (managedCondition) {
    return <></>; // Return nothing if the condition is met and avoid rendering the children
  }

  return <>{children}</>;
};

export default Guard;
