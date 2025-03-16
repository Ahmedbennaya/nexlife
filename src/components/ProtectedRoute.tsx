
import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: "admin" | "customer";
}

export const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        const userStr = localStorage.getItem("user");
        
        if (!token || !userStr) {
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }
        
        const user = JSON.parse(userStr);
        
        // Check if user has required role
        if (requiredRole && user.role !== requiredRole) {
          toast.error("You don't have permission to access this page");
          setIsAuthenticated(false);
          setIsLoading(false);
          return;
        }
        
        // Validate token with backend
        const response = await fetch("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error("Session expired");
        }
        
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth error:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        toast.error("Your session has expired. Please login again.");
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuth();
  }, [requiredRole]);
  
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    // Redirect to appropriate login page based on required role
    const redirectTo = requiredRole === "admin" ? "/admin/login" : "/sign-in";
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
};
