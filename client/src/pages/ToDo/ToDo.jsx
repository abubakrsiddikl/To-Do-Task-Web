import TaskCard from "../../components/TaskCard";
import useTasks from "../../hooks/useTasks";

const ToDo = () => {
  const [tasks, loading] = useTasks("To-Do");
  if (loading) return <h1>Loading...</h1>;
  console.log(tasks);
  return (
    <div className="border bg-gray-100 p-6 rounded-xl shadow-lg max-w-lg mx-auto">
      {/* Header */}
      <h1 className="text-center font-bold text-2xl text-gray-800">To-Do</h1>
      <hr className="my-3 border-gray-300" />

      {/* Task Cards */}
      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
