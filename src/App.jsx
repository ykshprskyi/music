import { HomePage } from "./components/pages/Home/Home";
import { Layout } from "./components/pages/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog } from "./components/pages/Catalog/Catalog";
import { ContentPage } from "./components/pages/ContentPage/ContentPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "catalog/:albumId",
        element: <ContentPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
