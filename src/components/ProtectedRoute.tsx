
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Carregando...</h2>
          <p>Verificando sua autenticação</p>
        </div>
      </div>
    );
  }

  if (!user) {
    // Redirect to the login page but save the current location they tried to access
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // User is authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
