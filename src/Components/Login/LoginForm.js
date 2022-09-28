import React from "react";
import { useState } from "react";
import { Container, TextField, InputAdornment, Button } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";

export default function LoginForm(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetchResponse = await fetch("/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
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
        <form onSubmit={handleSubmit}>
          <div id="userNameInput">
            <TextField
              required
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                borderBottom: "2px solid black",
                marginTop: "10px",
                marginRight: "5px",
              }}
              label="Email"
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
              onChange={(e) => setPassword(e.target.value)}
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
            <Button
              type="submit"
              sx={{ width: "100%" }}
              color="secondary"
              variant="contained"
            >
              Login
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}
