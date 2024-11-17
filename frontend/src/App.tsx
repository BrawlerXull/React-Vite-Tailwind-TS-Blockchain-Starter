import { Toaster } from "react-hot-toast";
import IndexPage from "./pages/Index.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<IndexPage />} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
      <Toaster />
    </>
  )
}

export default App
