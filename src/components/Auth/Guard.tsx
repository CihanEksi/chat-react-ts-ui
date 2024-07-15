import { useEffect } from "react";
import { excludedRoutes } from "../../constants/excluded-routes";
import useGeneralStore from "../../managers/stateManager/general.zustand";

interface GuardProps {
  children: JSX.Element;
}

const Guard = ({ children }: GuardProps) => {
  const me = useGeneralStore((state) => state.me);
  const includedCurrentRoute = excludedRoutes.includes(
    window.location.pathname // we are using window to get the current path because Guard is a top-level component
  );
  const isUserLoggedIn = me !== null;
  const managedCondition = !includedCurrentRoute && !isUserLoggedIn;

  useEffect(() => {
    if (managedCondition) {
      window.location.href = "/login"; // we are using windo to redirect the user to the login page becase Guard is a top-level component
    }
  }, [managedCondition]);

  if (managedCondition && !includedCurrentRoute) {
    return <></>; // Return nothing if the condition is met and avoid rendering the children
  }

  return <>{children}</>;
};

export default Guard;
