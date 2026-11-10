import { createBrowserRouter, Outlet } from "react-router-dom";
import Sidebar from "./companents/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Modal from "./companents/Modal";
import { useState } from "react";
import Photos from "./pages/Photos";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
    ],
  },
]);

function App() {
  const [openMadal, setOpenMadal] = useState(false);

  return (
    <div className="flex relative">
      {openMadal && <Modal setOpenMadal={setOpenMadal} />}

      <Sidebar setOpenMadal={setOpenMadal} />
      <div className="w-[80%] h-auto m-auto  px-11">
        <Outlet />
      </div>
    </div>
  );
}
export default App;
