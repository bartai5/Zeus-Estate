import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

import Home from "./pages/home/Home";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import PropertyDescription from "./pages/property-description/PropertyDescription";
import AccountMgmt from "./pages/account-mgmt/AccountManagement";
import Dashboard from "./pages/dashboard/Dashboard";
import UserListingCreate from "./pages/user listing/UserListingCreate";

// This is trials
import CreatePost from "./pages/user listing/CreatePost";
import RetrievePost from "./pages/user listing/RetrievePost";

function App() {
  const Logout = () => {
    localStorage.clear();
    return <Navigate to="/login" />;
  };

  const RegisterAndLogout = () => {
    localStorage.clear();
    return <Register />;
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute requireAdmin>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/property" element={<PropertyDescription />} />
        <Route path="/user/:id/" element={<AccountMgmt />} />
        <Route path="/create-listing" element={<UserListingCreate />} />

        {/* This is trials */}
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts"
          element={
            <ProtectedRoute>
              <RetrievePost />
            </ProtectedRoute>
          }
        />

        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;
