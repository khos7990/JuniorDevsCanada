import React from "react";
import { Container, TextField, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";

export default function LoginForm() {
  return (
    <div className="signup-parent">
      <Container
        className="login-container"
        maxWidth="sm"
        sx={{
          borderLeft: "2px solid white",
          borderRight: "2px solid white",
          height: "300px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div id="userNameInput">
          <TextField
            sx={{
              borderBottom: "2px solid black",
              marginTop: "10px",
              marginRight: "5px",
            }}
            label="UserName"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <AccountCircle />{" "}
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div id="password">
          {" "}
          <TextField
            sx={{
              borderBottom: "2px solid black",
              marginTop: "10px",
              marginRight: "5px",
            }}
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <PasswordIcon />{" "}
                </InputAdornment>
              ),
            }}
          />
        </div>
      </Container>
    </div>
  );
}
