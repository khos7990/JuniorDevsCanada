import { Button } from "@mui/material";
import React from "react";
import "./Home.css";

export default function Home(props) {
  let handleLogout = () => {
    localStorage.removeItem("token");
    props.setUserInState(null);
  };

  return (
    <div className="home-parent">
      Home
      {/* make logout button a component */}
      <Button
        onClick={handleLogout}
        type="submit"
        sx={{ width: "100%", top: "150px" }}
        color="secondary"
        variant="contained"
      >
        Logout
      </Button>
    </div>
  );
}
