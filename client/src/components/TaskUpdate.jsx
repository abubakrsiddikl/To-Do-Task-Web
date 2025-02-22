import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";

const TaskUpdate = () => {
  const task = useLoaderData(); // Load task data
  const navigate = useNavigate();
  console.log(task);
  const { id } = useParams();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
    },
  });

  // handle submit
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_server_api}/tasks/${id}`,
        data
      );
      if (res.status === 200) {
        console.log("Task updated successfully");
        toast.success("Your task update successful");
        navigate("/manageTask");
        console.log(res);
      }
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  // close modal
  const handleClose = () => {
    navigate(-1); //back previous page
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Update Task</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("title", { required: true })}
            className="w-full p-2 border rounded mb-2"
            placeholder="Task Title"
          />
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded mb-2"
            placeholder="Task Description"
            rows="6"
          />

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskUpdate;
