import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, Typography, Button } from "@mui/material";
import "../styles/Navbar.css";

const Navbar = ({ setIsLogin, isLogin }) => {
  const navigate = useNavigate();

  const onClickHandlerLogin = () => {
    navigate(`login`);
  };

  const onClickHandlerRegister = () => {
    navigate("register");
  };

  const onClickHandleLogOut = () => {
    alert("Log Out Successfull");
    setIsLogin(true);
  };

  return (
    <Stack
      marginBottom="10px"
      direction="row"
      height="66px"
      padding="16px"
      justifyContent="center"
      alignItems="center"
      display="flex"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        justifyContent: "none",
      }}
      px="30px"
      backgroundColor="#e7fae6"
      fontFamily="Montserrat"
      fontWeight="500"
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        {/* <img
          alt="Logo"
          style={{
            width: "48px",
            height: "48px",
            margin: "0 20px",
            color: "#454B1B",
          }}
        /> */}
        <Typography
          sx={{
            margin: "auto",
            marginTop: "10px",
            color: "#3C6255",
            fontSize: "30px",
            fontWeight: "600",
          }}
        >
          Farmous
        </Typography>
      </Link>
      <Stack direction="row" gap="30px" fontSize="24px" alignItems="flex-end">
        {/* HOME LINK  */}
        <Link
          className="nav-link"
          to="/"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "17px",
          }}
        >
          Home
        </Link>

        {/* Goverment Schemes  */}
        <Link
          to="/govScheme"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "17px",
          }}
        >
          Gov Schemes
        </Link>

        <Link
          to="/loan"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "17px",
          }}
        >
          Loan
        </Link>

        {/* WHEATHER LINK  */}
        <Link
          to="/weather"
          style={{ textDecoration: "none", color: "#000", fontSize: "17px" }}
        >
          Weather
        </Link>

        {/* STORE LINK  */}
        <Link
          to="/store"
          style={{ textDecoration: "none", color: "#000", fontSize: "17px" }}
        >
          Store
        </Link>

        {/* ABOUT US  */}
        <Link
          to="/aboutUs"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "17px",
          }}
        >
          About Us
        </Link>

        {/* Contact us  */}
        <Link
          to="/contactUs"
          style={{
            textDecoration: "none",
            color: "#000",
            fontSize: "17px",
          }}
        >
          Contact Us
        </Link>
        {isLogin === "true" ? (
          <>
            <Button
              className="btn btn-sign-up"
              sx={{
                paddin: "10px",
                border: "none",
                borderRadius: "3px",
                fontSize: "16px",
                backgroundColor: "#658864",
                color: "white",
                borderTop: "1px solid rgba(255, 255, 255, 0.6)",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#446143",
                },
              }}
              onClick={onClickHandleLogOut}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <Button
              className="btn btn-sign-up"
              sx={{
                paddin: "10px",
                border: "none",
                borderRadius: "3px",
                fontSize: "16px",
                backgroundColor: "#658864",
                color: "white",
                borderTop: "1px solid rgba(255, 255, 255, 0.6)",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#446143",
                },
              }}
              onClick={onClickHandlerLogin}
            >
              Log in
            </Button>

            <Button
              className="btn btn-sign-up"
              sx={{
                paddin: "10px",
                border: "none",
                borderRadius: "3px",
                fontSize: "16px",
                backgroundColor: "#658864",
                color: "white",
                borderTop: "1px solid rgba(255, 255, 255, 0.6)",
                textTransform: "capitalize",
                "&:hover": {
                  color: "#fff",
                  backgroundColor: "#446143",
                },
              }}
              onClick={onClickHandlerRegister}
            >
              Sign Up
            </Button>
          </>
        )}

        {/* <button
          className="btn btn-sign-up"
          style={{
            border: "none",
            borderRadius: "3px",
            fontSize: "16px",
            fontWeight: "500",
            backgroundColor: "#658864",
            color: "white",
            borderTop: "1px solid rgba(255, 255, 255, 0.6)",
          }}
        >
          Sign Up
        </button> */}
      </Stack>
    </Stack>
    // <div className="Navbar" style={styleNavbar}>
    //   <Link to="/">Home</Link>
    //   <Link to="/">Contact</Link>
    //   <Link to="/">About</Link>
    //   <Link to="/">Home</Link>
    // </div>
  );
};

export default Navbar;
