import React, { Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import "./assets/css/style.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const Transactions = lazy(() => import("./pages/Transactions.jsx"));
const Accounts = lazy(() => import("./pages/Accounts.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));

const AuthenticatedRoute = ({ component: Component, ...props }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <Component {...props} />;
};

const RedirectToHomeIfAuthenticated = ({ component: Component, ...props }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return null;
  }

  return <Component {...props} />;
};

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      sessionStorage.setItem("user", JSON.stringify(user));

      console.log("User information:", user);
    }
  }, [isAuthenticated, user]);

  return (
    <>
      {isAuthenticated && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/login"
            element={<RedirectToHomeIfAuthenticated component={Login} />}
          />
          <Route
            path="/register"
            element={<RedirectToHomeIfAuthenticated component={Register} />}
          />
          <Route path="/" element={<AuthenticatedRoute component={Home} />} />
          <Route
            path="/transactions"
            element={<AuthenticatedRoute component={Transactions} />}
          />
          <Route
            path="/accounts"
            element={<AuthenticatedRoute component={Accounts} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
