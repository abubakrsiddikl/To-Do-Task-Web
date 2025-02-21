import Done from "../Done/Done";
import InProgress from "../InProgress/InProgress";
import ToDo from "../ToDo/ToDo";

const ManageTask = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-10 gap-3 w-11/12 mx-auto min-h-screen">
      <ToDo></ToDo>
      <InProgress></InProgress>
      <Done></Done>
    </div>
  );
};

export default ManageTask;
