import Navbar from "./components/UI/Navbar"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>template</div>,
    children: [
   
    ]
  }, {
    path: 'notes',
    element: <h1>Página de anotação</h1>
  }
]);
function App(){
  return(
    <RouterProvider router={router} />
  )
}

export default App
