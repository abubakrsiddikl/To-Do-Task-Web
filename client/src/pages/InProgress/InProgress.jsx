import React from "react";
import useTasks from "../../hooks/useTasks";
import TaskCard from "../../components/TaskCard";

import toast from "react-hot-toast";
import axios from "axios";

const InProgress = () => {
  const { tasks, setTasks, loading } = useTasks("In Progress");

  if (loading) return <h1>Loading...</h1>;
  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_server_api}/tasks/${id}`
    );
    if (res.status === 200) {
      toast.success("Your task is deleted");
      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    }
  };
  return (
    <div className="border bg-gray-100 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
      {/* Header */}
      <h1 className="text-center font-bold text-2xl text-gray-800">
        In Progress
      </h1>
      <hr className="my-3 border-gray-300" />

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} handleDelete={handleDelete}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default InProgress;
