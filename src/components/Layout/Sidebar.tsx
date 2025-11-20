import { NavLink } from "react-router-dom";
import { Home, Users, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onLogout?: () => void;
}

export const Sidebar = ({ onLogout }: SidebarProps) => {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/communities", label: "Communities", icon: Users },
    { path: "/profile", label: "Profile", icon: User },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="w-72 gradient-bg text-white flex flex-col h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center">InterestConnect</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-smooth ${
                isActive
                  ? "bg-white text-primary"
                  : "bg-white/10 hover:bg-white/20 hover:translate-x-1"
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/20">
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full text-white hover:bg-white/20 justify-start gap-3"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </Button>
        <div className="mt-4 text-center text-xs opacity-80">
          <p className="mb-1">© 2025 InterestConnect</p>
          <p className="font-semibold">Built with ❤️</p>
        </div>
      </div>
    </aside>
  );
};
