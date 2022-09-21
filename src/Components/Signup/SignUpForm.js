import React from "react";
import { Container, TextField, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import PasswordIcon from "@mui/icons-material/Password";

import "./Signup.css";

export default function SignUpForm() {
  return (
    <div className="signup-parent">
      <Container
        className="signup-container"
        maxWidth="sm"
        sx={{
          borderLeft: "2px solid white",
          borderRight: "2px solid white",
          height: "300px",
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
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
        <div id="emailInput">
          <TextField
            sx={{
              borderBottom: "2px solid black",
              marginTop: "10px",
            }}
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {" "}
                  <MailIcon />{" "}
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

        <div id="confirmPass">
          <TextField
            sx={{
              borderBottom: "2px solid black",
            }}
            label="Confirm Password"
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
