// utils/moveTask.js
import axios from "axios";
import toast from "react-hot-toast";

export const moveTask = (id, category, tasks, setTasks) => {
  console.log({ id, category });
  const updatedTasks = tasks.map((task) =>
    task._id === id ? { ...task, category } : task
  );
  console.log(updatedTasks);
  setTasks(updatedTasks);

  axios
    .patch(
      `${import.meta.env.VITE_server_api}/tasks/${id}?category=${category}`
    )
    .then(() => {
      toast.success(`Task moved to ${category}`);
    })
    .catch(() => {
      toast.error("Failed to update task category");
    });
};
