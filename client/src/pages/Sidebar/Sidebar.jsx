import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css"

const Sidebar = ({handleLogOut}) => {
  return (
    <div className="flex flex-col gap-3">
      <NavLink to="/addTask">Add Task</NavLink>
      <NavLink to="/todo">To-Do</NavLink>
      <NavLink to="/inProgress">In Progress</NavLink>
      <NavLink to="/done">Done</NavLink>
      <Link onClick={handleLogOut}>Logout</Link>
    </div>
  );
};

export default Sidebar;
