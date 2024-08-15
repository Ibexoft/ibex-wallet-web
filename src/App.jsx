import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./components/Header.jsx";
import { setUser } from "./stores/slices/userSlice";
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

const AuthenticatedRoute = ({ component: Component, redirectTo, ...props }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && ((redirectTo && isAuthenticated) || (!redirectTo && !isAuthenticated))) {
      navigate(redirectTo ? "/" : "/login");
    }
  }, [isAuthenticated, isLoading, navigate, redirectTo]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if ((redirectTo && isAuthenticated) || (!redirectTo && !isAuthenticated)) {
    return null;
  }

  return <Component {...props} />;
};

function App() {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(setUser(user));
    }
  }, [isAuthenticated, user, dispatch]);

  return (
    <>
      {isAuthenticated && <Header />}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<AuthenticatedRoute component={Login} redirectTo />} />
          <Route path="/register" element={<AuthenticatedRoute component={Register} redirectTo />} />
          <Route path="/" element={<AuthenticatedRoute component={Home} />} />
          <Route path="/transactions" element={<AuthenticatedRoute component={Transactions} />} />
          <Route path="/accounts" element={<AuthenticatedRoute component={Accounts} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
