import React from "react";
import { Navigate, Route, Routes } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import NotificationsPage from "./pages/NotificationsPage";
import ChatPage from "./pages/ChatPage";
import CallPage from "./pages/CallPage";
import OnboardingPage from "./pages/OnboardingPage";
import PageLoader from "./components/PageLoader.jsx";
import useAuthUser from "./hooks/useAuthUser.js";

const App = () => {
  
const {isLoading, authUser } = useAuthUser();

const isAuthenticated = Boolean(authUser)
const isOnboarded = authUser?.isOnboarded
console.log("isOnboarded: ", isOnboarded)

  if (isLoading) return <PageLoader />;

  return (
    <div className="h-screen" data-theme="night">
      <button onClick={() => toast.success("Hello World")}>Create Toast</button>
      <Routes>
        <Route
          path="/"
          element={(isAuthenticated && isOnboarded) ? <HomePage /> : (
            <Navigate to={isAuthenticated ? '/onboarding' : '/login'} />
          )}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignUpPage /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
        />
        <Route
          path="/notifications"
          element={isAuthenticated ? <NotificationsPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/chat"
          element={isAuthenticated ? <ChatPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/call"
          element={isAuthenticated ? <CallPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/onboarding"
          element={authUser ? <OnboardingPage /> : <Navigate to="/login" />}
        />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
