
import { ReactNode, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import {
  LayoutDashboard,
  PackageOpen,
  Users,
  ShoppingCart,
  Settings,
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface AdminLayoutProps {
  children: ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar toggle */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-40 md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="px-4 py-6">
            <h1 className="text-2xl font-bold text-primary">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">
              {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
            </p>
          </div>
          <Separator />
          <nav className="flex-1 space-y-1 px-2 py-4">
            <Link to="/admin/dashboard" className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
              <LayoutDashboard className="mr-3 h-5 w-5 text-primary" />
              Dashboard
            </Link>
            <Link to="/admin/products" className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
              <PackageOpen className="mr-3 h-5 w-5 text-primary" />
              Products
            </Link>
            <Link to="/admin/orders" className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
              <ShoppingCart className="mr-3 h-5 w-5 text-primary" />
              Orders
            </Link>
            <Link to="/admin/users" className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
              <Users className="mr-3 h-5 w-5 text-primary" />
              Users
            </Link>
            <Link to="/admin/settings" className="flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100">
              <Settings className="mr-3 h-5 w-5 text-primary" />
              Settings
            </Link>
          </nav>
          <div className="px-4 py-6">
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={`flex-1 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? "md:ml-64" : "ml-0"
        }`}
      >
        <div className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{title}</h1>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
