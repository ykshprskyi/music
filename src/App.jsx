import { HomePage } from "./components/pages/Home/Home";
import { Layout } from "./components/pages/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Catalog } from "./components/pages/Catalog/Catalog";
import { ContentPage } from "./components/pages/ContentPage/ContentPage";
import { Technologies } from "./components/pages/Technologies/Technologies.tsx";
import { ErrorPage } from "./components/pages/ErrorPage/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/Music",
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
      {
        path: "/technologies",
        element: <Technologies />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
