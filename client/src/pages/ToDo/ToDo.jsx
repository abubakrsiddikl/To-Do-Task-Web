import axios from "axios";
import TaskCard from "../../components/TaskCard";
import useTasks from "../../hooks/useTasks";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ToDo = () => {
  const navigate = useNavigate();
  const {tasks, setTasks, loading} = useTasks("To-Do");
  if (loading) return <h1>Loading...</h1>;

  const handleDelete = async (id) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_server_api}/tasks/${id}`
    );
    if (res.status === 200) {
      navigate("/manageTask");
      toast.success("Your task is deleted");
      const newTasks = tasks.filter((task) => task._id !== id);
      setTasks(newTasks);
    }
  };

  return (
    <div className="border bg-gray-100 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
      {/* Header */}
      <h1 className="text-center font-bold text-2xl text-gray-800">To-Do</h1>
      <hr className="my-3 border-gray-300" />

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            handleDelete={handleDelete}
          ></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
