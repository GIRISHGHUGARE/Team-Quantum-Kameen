import { Navigate, Route, Routes } from "react-router-dom";
import FloatingShape from "./components/FloatingShape";

import SignUpPage from "./pages/authPages/SignUpPage";
import LoginPage from "./pages/authPages/LoginPage";
import EmailVerificationPage from "./pages/authPages/EmailVerificationPage";
import DashboardPage from "./pages/clientPages/DashboardPage";
import CartPage from "./pages/clientPages/CartPage";
import ForgotPasswordPage from "./pages/authPages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/authPages/ResetPasswordPage";

import LoadingSpinner from "./components/LoadingSpinner";
import Homebg from "./assets/Homebg.jpg"

import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import LandingPage from "./pages/clientPages/LandingPage";
import "./App.css"
import ADashboard from "./pages/adminPages/ADashboard";



const ProtectedRoute = ({ children, role }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }

  if (!user.isVerified) {
    return <Navigate to='/verify-email' replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to='/' replace />;
  }

  return children;
};

// redirect authenticated users to the dashboard
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.isVerified) {
    if (user.role === 'admin') {
      return <Navigate to='/admindashboard' replace />;
    }
    return <Navigate to='/dashboard' replace />;
  }

  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${Homebg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <Routes>
        {/* Default route for unauthenticated users */}
        <Route
          path='/'
          element={
            <RedirectAuthenticatedUser>
              <LandingPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/admindashboard'
          element={
            <ProtectedRoute role="admin">
              <ADashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path='/dashboard'
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signup'
          element={
            <RedirectAuthenticatedUser>
              <SignUpPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/login'
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
        <Route
          path='/forgot-password'
          element={
            <RedirectAuthenticatedUser>
              <ForgotPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/chatbot'
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path='/reset-password/:token'
          element={
            <RedirectAuthenticatedUser>
              <ResetPasswordPage />
            </RedirectAuthenticatedUser>
          }
        />
        {/* catch-all route */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>

      <Toaster />
    </div>
  );
}

export default App;
