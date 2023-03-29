import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

import axios from "axios";

const Register = () => {
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
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  // const [user, setUser] = useState({
  //   name: "",
  //   mobileNo: "",
  //   email: "",
  //   password: "",
  //   reEnterPassword: "",
  // });
  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();

    console.log(username, contact, email, password, confirm_password);

    if (
      username &&
      contact &&
      email &&
      password &&
      password === confirm_password
    ) {
      const response = await fetch("http://localhost:1337/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          contact,
          email,
          password,
          confirm_password,
        }),
      });

      const data = await response.json();

      if (data.status === "ok") {
        navigate(`/login`);
      }
    } else {
      alert("Please enter valid information");
    }
  }

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });
  //   // console.log(user);
  // };

  // const register = () => {
  //   const { name, email, password, reEnterPassword } = user;

  //   if (name && email && password && password === reEnterPassword) {
  //     // alert("Valid Input");
  //     axios
  //       .post("http://localhost:8000/register", user)
  //       .then((res) => console.log(res));
  //   } else {
  //     alert("Please enter valid information");
  //   }
  // };

  return (
    <div>
      <Stack direction="row" backgroundColor="#f7fcf7">
        <Box
          sx={{
            marginLeft: "10px",
            width: "50%",
            float: "left",
          }}
          backgroundColor="#"
        >
          Register Photo
        </Box>
        <Box
          sx={{
            width: "500px",
            // height: "500px",
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
            Register
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
                name="name"
                value={username}
                style={inputStyle}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
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
                name="contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
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
              <EmailIcon
                sx={{
                  opacity: "0.8",
                  color: "#658864",
                  alignItems: "start",
                }}
              />
              <input
                type="email"
                style={inputStyle}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gamil.com"
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
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
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
                onChange={(e) => setConfirm_password(e.target.value)}
                name="reEnterPassword"
                value={confirm_password}
                placeholder="Confirm Password"
              />
            </Box>
            <button
              className="btn btn-sign-up"
              style={{
                width: "250px",
                margin: "10px 72px",
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
              onClick={registerUser}
            >
              Register
            </button>
          </Box>
        </Box>
      </Stack>
      {/* <form action="POST" onSubmit={registerUser}>
        <input
          type="text"
          placeholder="enter your username"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter your password"
          value={email}
          name="password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter the confirm password"
          value={password}
          name="confirm_password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="enter the confirm email"
          value={confirm_password}
          name="email"
          onChange={(e) => setConfirm_password(e.target.value)}
        />
        <button>Register</button>
      </form> */}
    </div>
  );
};

export default Register;
