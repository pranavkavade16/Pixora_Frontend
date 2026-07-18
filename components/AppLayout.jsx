import { Outlet, useLocation } from "react-router-dom";
import { DashboardNav } from "./DashboardNav";

const AppLayout = () => {
  const location = useLocation();

  const hideHeader = location.pathname.startsWith("/photoDetails");

  return (
    <>
      {!hideHeader && <DashboardNav />}
      <Outlet />
    </>
  );
};

export default AppLayout;
