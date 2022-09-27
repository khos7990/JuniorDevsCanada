import React from "react";
import { Container, TextField, InputAdornment, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";

export default function LoginForm(props) {
  return (
    <div className="login-parent">
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
            required
            type="text"
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
            required
            type="password"
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
        <div className="SubmitBtn">
          <Button sx={{ width: "100%" }} color="secondary" variant="contained">
            Login
          </Button>
        </div>
      </Container>
    </div>
  );
}
