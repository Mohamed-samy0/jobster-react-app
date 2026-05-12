import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing, Error, Dashboard, Register } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "*",
    element: <Error />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
