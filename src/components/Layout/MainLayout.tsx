import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const MainLayout = () => {
  const handleLogout = () => {
    // TODO: Implement logout logic when Cloud is connected
    console.log("Logout clicked");
  };

  return (
    <div className="flex min-h-screen gradient-bg">
      <div className="w-full max-w-[1400px] mx-auto flex bg-white rounded-[30px] shadow-2xl my-5 overflow-hidden">
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
