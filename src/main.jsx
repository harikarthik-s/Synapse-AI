import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ChatApp from './ChatApp.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const clerkProvider = (
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    navigate={(to) => {
      appRouter.navigate(to);
    }}
  />
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <ChatApp />
      </ClerkProvider>
    ),
  },
]);


// const appRouter = createBrowserRouter([
//   {
//     path:"/",
//     element: <App/>,
//   }, 
//   {
//     path:"/chat",
//     element:<ChatApp/>
//   }
// ])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {clerkProvider}
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
