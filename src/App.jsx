import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./Home";
import ChatApp from "./ChatApp";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route path="/chat" element= {
        <>
          <SignedIn>
              <ChatApp />
          </SignedIn>
          <SignedOut>
              <RedirectToSignIn />
          </SignedOut>
        </>
        }
      />
    </>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
