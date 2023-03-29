import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

import { useNavigate } from "react-router-dom";

const Login = ({ isLogin, setIsLogin }) => {
  const titleStyle = {
    width: "auto",
    margin: "auto",
    fontSize: "16px",
    fontWeight: "600",
    color: "#3C6255",
    paddingRight: "100px",
  };

  const inputStyle = { outline: "none", border: "none", paddingLeft: "25px" };

  const inputBoxStyle = {
    margin: "20px",
    padding: "8px 20px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#f7fcf7",
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      // setIsLogin(data.user);
      setIsLogin("true");
      console.log({isLogin})
      navigate(`/`);
      // window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  }

  return (
    <div>
      <Stack direction="row" backgroundColor="#f7fcf7">
        <Box
          sx={{
            marginLeft: "10px",
            width: "50%",
            float: "left",
            height: "88vh",
          }}
          backgroundColor="#"
        >
          Login Photo
        </Box>
        <Box
          sx={{
            width: "500px",
            background: "#e7fae6",
            margin: "auto",
            borderRadius: "12px",
          }}
        >
          <Typography
            sx={{
              marginTop: "65px",
              fontSize: "40px",
              color: "#446143",
              textAlign: "center",
              "&:after": {
                height: "2px",
                width: "100px",
                background: "#658864",
              },
            }}
          >
            Log in
          </Typography>
          <Box
            sx={{
              margin: "54px",
            }}
          >
            <Box
              style={inputBoxStyle}
              sx={{
                height: "46px",
                width: "350px",
              }}
            >
              <PersonIcon
                sx={{
                  opacity: "0.8",
                  color: "#658864",

                  alignItems: "start",
                }}
              />
              <input
                type="text"
                style={inputStyle}
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="John"
              />
            </Box>

            <Box
              style={inputBoxStyle}
              sx={{
                height: "46px",
                width: "350px",
              }}
            >
              <CallIcon
                sx={{
                  opacity: "0.8",
                  color: "#658864",

                  alignItems: "start",
                }}
              />
              <input
                type="contact"
                style={inputStyle}
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="+91 xxxxx xxxxx"
              />
            </Box>

            <Box
              style={inputBoxStyle}
              sx={{
                height: "46px",
                width: "350px",
              }}
            >
              <LockIcon
                sx={{
                  opacity: "0.8",
                  color: "#658864",

                  alignItems: "start",
                }}
              />
              <input
                type="password"
                style={inputStyle}
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              />
            </Box>

            {/* <Box
              style={inputBoxStyle}
              sx={{
                height: "46px",
                width: "350px",
              }}
            >
              <LockIcon
                sx={{
                  opacity: "0.8",
                  color: "#658864",

                  alignItems: "start",
                }}
              />
              <input
                type="password"
                style={inputStyle}
                name="reEnterPassword"
                value={reEnterPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
              />
            </Box> */}
            <button
              className="btn btn-sign-up"
              style={{
                width: "250px",
                margin: "10px 70px",
                border: "none",
                borderRadius: "3px",
                fontSize: "18px",
                fontWeight: "500",
                backgroundColor: "#658864",
                color: "white",
                borderTop: "1px solid rgba(255, 255, 255, 0.6)",

                "&:hover": {
                  fontWeight: "600",
                  color: "#fff",
                  backgroundColor: "#446143",
                },
              }}
              onClick={loginUser}
            >
              Log in
            </button>
            <Typography sx={{ textAlign: "center" }}>
              Forget Password?
            </Typography>
          </Box>

          {/* <Box
              sx={{
                display: "flex",
                width: {
                  sx: "100%",
                  md: "60%",
                  lg: "50%",
                },
              }}
            >
              <Typography sx={titleStyle}>Username:</Typography>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                style={inputStyle}
              />
            </Box> */}
        </Box>
      </Stack>
    </div>
  );
};

export default Login;
