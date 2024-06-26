import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Adv from "./component/adv.jsx";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

function App() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <body className="min-h-screen bg-[#1A120B]">
        <React.Fragment>
          <div
            className="text-5xl text-[#D5CEA3] font-bold cursor-pointer pt-2 pl-2"
            onClick={openDrawer}
          >
            {" "}
            ☰
          </div>
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="p-4 bg-[#3C2A21] flex-col flex items-center"
          >
            <div className="flex align-middle">
              <img src={logo} alt="logo" className="w-3/4" />
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <ul className="text-white cursor-pointer mt-3">
              <li>Products</li>
              <li>Our Services</li>
              <li>FAQ</li>
            </ul>
          </Drawer>
          <div className="flex justify-center"><Adv /></div>
        </React.Fragment>
        
      </body>
    </>
  );
}

export default App;
