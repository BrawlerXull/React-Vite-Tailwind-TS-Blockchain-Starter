import { Toaster } from "react-hot-toast";
import IndexPage from "./pages/Index.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import DashboardPage from "./pages/Dashboard.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<IndexPage />} />
      <Route path="/dashboard">
        <Route index element={<DashboardPage />} />
      </Route>
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
