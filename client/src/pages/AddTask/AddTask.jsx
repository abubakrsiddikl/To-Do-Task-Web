// import React from "react";
// import { CiCirclePlus } from "react-icons/ci";

// const AddTask = () => {
//   return (
//     <div className="pl-6 pt-12">
//       {/* add task card */}
//       <div className="bg-gray-300 py-10 px-5 w-64 flex items-center justify-center gap-3 rounded-md cursor-pointer hover:bg-gray-400 transition-all">
//         <CiCirclePlus size={24} className="text-blue-600" />
//         <h1 className="text-lg font-semibold">Add Task</h1>
//       </div>
//     </div>
//   );
// };

// export default AddTask;

import { useForm } from "react-hook-form";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Form Submit Function
  const onSubmit = (data) => {
    const formattedTimestamp = new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const newTask = {
      ...data,
      timestamp: formattedTimestamp, // Formatted Date
    };
    console.log("New Task:", newTask);
    reset();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full m-3  max-w-md ">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>

      {/* Task Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Title Input */}
        <input
          type="text"
          {...register("title", {
            required: "Title is required",
            maxLength: 50,
          })}
          placeholder="Enter task title"
          className="border p-2 rounded-md w-full"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}

        {/* Description Input */}
        <textarea
          {...register("description", { maxLength: 200 })}
          placeholder="Enter description (optional)"
          className="border p-2 rounded-md w-full"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">Max length is 200 characters</p>
        )}

        {/* Category Dropdown */}
        <select
          {...register("category")}
          className="border p-2 rounded-md w-full"
        >
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md w-full"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
