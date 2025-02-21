
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = ({handleLogOut}) => {
  return (
    <div className="flex flex-col gap-3">
      <NavLink to="/addTask">Add Task</NavLink>
      <NavLink to="/manageTask">Manage Task</NavLink>
      <Link onClick={handleLogOut}>Logout</Link>
    </div>
  );
};

export default Sidebar;
