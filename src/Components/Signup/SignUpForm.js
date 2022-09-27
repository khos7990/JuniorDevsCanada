import React, { useState } from "react";
import { Container, TextField, InputAdornment, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import PasswordIcon from "@mui/icons-material/Password";

import "./Signup.css";

export default function SignUpForm(props) {
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm, setConfirm] = useState();

  const disable = password !== confirm;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchResponse = await fetch("api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user, email: email, password: password }),
      });

      if (!fetchResponse.ok) throw new Error("Fetch Failed");
      let token = await fetchResponse.json();
      localStorage.setItem("token", token);
      const userDoc = JSON.parse(atob(token.split(".")[1])).user;
      props.setUserInState(userDoc);
    } catch (err) {
      console.log(err);
    }
  };

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
        <form autoComplete="off" onSubmit={handleSubmit}>
          <div id="userNameInput">
            <TextField
              type="text"
              required
              onChange={(e) => setUser(e.target.value)}
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
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
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
              type="password"
              required
              onChange={(e) => setConfirm(e.target.value)}
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
          {disable ? (
            <div className="passwordError">
              Please type in the matching password
            </div>
          ) : null}
          <div className="SubmitBtn">
            <Button
              disabled={disable}
              sx={{ width: "100%" }}
              color="secondary"
              variant="contained"
              type="submit"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
