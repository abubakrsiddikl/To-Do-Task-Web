import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import ManageTask from "../pages/ManageTask/ManageTask";
import TaskUpdate from "../components/TaskUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "/manageTask",
        element: <ManageTask></ManageTask>,
      },
      {
        path: "/tasks/:id",
        element: <TaskUpdate></TaskUpdate>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_server_api}/tasks/${params.id}`)
      },
    ],
  },
]);
export default router;
