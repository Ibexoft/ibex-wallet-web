import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-441zzsy0qycq52ko.us.auth0.com"
    clientId="dGRMz3jKrIB0PmphOirqGxN6eCqe2WDO"
    authorizationParams={{
      redirect_uri: 'http://localhost:5173/',  
    }}
    cacheLocation="localstorage" 
    useRefreshTokens={true} 
  >
    <Router>
      <App />
    </Router>
  </Auth0Provider>
);
