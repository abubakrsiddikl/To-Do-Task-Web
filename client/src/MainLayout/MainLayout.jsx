import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1 className="text-center font-bold">Lay out design</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
