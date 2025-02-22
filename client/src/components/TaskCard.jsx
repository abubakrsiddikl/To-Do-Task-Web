import React from "react";
import { Pencil, Trash, GripVertical, CheckSquare, Square } from "lucide-react";
import { Link } from "react-router-dom";
import { useDrag } from "react-dnd";

// eslint-disable-next-line react/prop-types
const TaskCard = ({ task, handleDelete }) => {
  // create Daragable taskCard
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task._id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      key={task._id}
      className="bg-white shadow-md rounded-xl p-5 transition hover:shadow-lg border border-gray-200"
    >
      {/* Title & Description */}
      <h2 className="text-lg font-semibold text-gray-800 text-center">
        {task?.title}
      </h2>
      <p className="text-sm text-gray-600 text-center mt-1">
        {task?.description}
      </p>

      {/* Actions: Edit & Delete */}
      <div className="flex justify-center gap-4 mt-4">
        <Link to={`/tasks/${task._id}`}>
          <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 transition">
            <Pencil size={18} /> <span className="text-sm">Edit</span>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(task._id)}
          className="flex items-center gap-1 text-red-500 hover:text-red-700 transition"
        >
          <Trash size={18} /> <span className="text-sm">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
