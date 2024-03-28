import React from "react";
import "./App.css";
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
      <React.Fragment>
        <div className="text-5xl font-bold cursor-pointer ml-2 mt-2" onClick={openDrawer}> ☰</div>
        <Drawer open={open} onClose={closeDrawer} className="p-4 bg-black">
          
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
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
        </Drawer>
      </React.Fragment>
    </>
  );
}

export default App;
