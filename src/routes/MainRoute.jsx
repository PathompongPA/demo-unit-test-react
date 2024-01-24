import { Outlet, createBrowserRouter } from "react-router-dom";
import * as Components from "../components";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { path: "", element: <Components.Navbar /> },
      { path: "home", element: <div>home</div> },
      { path: "about", element: <>about</> },
    ],
  },
  {
    path: "*",
    element: (
      <>
        <h1>error 404</h1>
      </>
    ),
  },
]);
