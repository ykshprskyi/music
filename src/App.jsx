import { HomePage } from "./components/pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
