import { useEffect, useState } from "react";
import router from "../routes/Routes";

const usePath = () => {
  const [path, setPath] = useState<string>(window.location.pathname);
  useEffect(() => {
    router.subscribe((state) => {
      setPath(state.location.pathname);
    });
  });

  return { path };
};

export default usePath;
