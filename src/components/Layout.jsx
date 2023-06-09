import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import TempHeader from "./TempHeader";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { UIContext } from "./contexts/UI.context";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Layout() {
  const {
    isOpen: open,
    severity = "info",
    onClose: handleClose,
    message,
  } = useContext(UIContext);
  // console.log(handleClose);

  const action = (props) => {
    // console.log(props);
    return (
      <React.Fragment>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
  };

  return (
    <>
      <header>
        <h1>To-do App</h1>
        <TempHeader />
      </header>
      <main>
        {/* {JSON.stringify({ isOpen: open, severity, handleClose, message })} */}
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </main>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        // message={message}
        // action={action}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          <>
            <p>{message}</p>
            {action}
          </>
        </Alert>
      </Snackbar>
    </>
  );
}

export default Layout;