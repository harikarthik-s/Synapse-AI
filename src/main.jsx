import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from '@clerk/themes';
import ContextProvider from "./context/Context.jsx"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#ac6aff",
          colorText: "white",
          colorBackground: "#15131d"
        },
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <ContextProvider>
        <App />
      </ContextProvider>
    </ClerkProvider>
  </React.StrictMode>
);
