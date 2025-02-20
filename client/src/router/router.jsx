import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import AddTask from "../pages/AddTask/AddTask";
import ToDo from "../pages/ToDo/ToDo";
import InProgress from "../pages/InProgress/InProgress";
import Done from "../pages/Done/Done";

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
        path: "/todo",
        element: <ToDo></ToDo>,
      },
      {
        path: "/inProgress",
        element: <InProgress></InProgress>,
      },
      {
        path: "/done",
        element: <Done></Done>,
      },
    ],
  },
]);
export default router;
