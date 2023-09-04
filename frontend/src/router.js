import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: 'notes',
        element: <Notes/>
      },
      {
        path: "ex",
        element: <p>Exemplo </p>
      }
    ]
  }, 
]);