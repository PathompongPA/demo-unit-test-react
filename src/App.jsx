import "./App.css";
import { RouterProvider } from "react-router-dom";
import { createContext, useReducer } from "react";
import * as Routes from "./routes";
import * as Store from "./stores";

export const Context = createContext({});
function App() {
  const [state, dispatch] = useReducer(Store.HandleState, { count: 99 });
  return (
    <Context.Provider value={{ state, dispatch }}>
      <RouterProvider router={Routes.MainRoute} />
    </Context.Provider>
  );
}

export default App;
