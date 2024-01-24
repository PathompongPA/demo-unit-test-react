import { Outlet, createBrowserRouter } from "react-router-dom";
import * as Components from "../components";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Components.Navbar />
        <Outlet />
      </div>
    ),
    children: [
      { path: "", element: <Components.Content1 /> },
      { path: "Logo", element: <div>content1</div> },
      { path: "about", element: <div>content2</div> },
      { path: "login", element: <div>content3</div> },
      { path: "logout", element: <div>content3</div> },
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
