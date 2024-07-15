import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/Auth/Signup";
import Login from "../components/Auth/Login";
import Home from "../components/Home";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
