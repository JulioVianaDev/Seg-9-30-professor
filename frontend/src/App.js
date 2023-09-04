import Navbar from "./components/UI/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Notes from "./pages/Notes";
const router = createBrowserRouter([
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
function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App
