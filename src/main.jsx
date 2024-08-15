import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./stores"; 
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
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Auth0Provider>
);
