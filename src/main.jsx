import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./routes/MainPage.jsx";
import NotFound from "./routes/NotFound.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Character from "./routes/Characters.jsx";
import ComicDetail from "./routes/ComicDetail.jsx";
import Comics from "./routes/Comics.jsx";
import Email from "./routes/Email.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "email", element: <Email /> },
      {
        path: "characters",
        element: <Character />,
      },
      {
        path: "comics/:id",
        element: <ComicDetail />,
      },
      { path: "comics", element: <Comics /> },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
