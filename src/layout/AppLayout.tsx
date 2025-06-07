import { Outlet } from "react-router";
// import AppHeader from "./AppHeader";
import HeaderNav from "../components/header/HeaderNav";
const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Full-width Header */}
      {/* <AppHeader /> */}
      <HeaderNav />

      {/* Page Content */}
      <main className="flex-1 p-4 md:p-6 mx-auto w-full max-w-screen-2xl">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
