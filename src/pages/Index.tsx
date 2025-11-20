import { Navigate } from "react-router-dom";

// Redirect to auth/login by default
const Index = () => {
  return <Navigate to="/auth/login" replace />;
};

export default Index;
