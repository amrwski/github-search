import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavouriteProvider, UserProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <UserProvider>
      <FavouriteProvider>
        <App />
      </FavouriteProvider>
    </UserProvider>
  </React.StrictMode>
);
