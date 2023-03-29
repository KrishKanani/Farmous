import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box backgroundColor="#bcebb9" width="100%" margin="auto" padding="30px">
      <Box margin="10px" textAlign="center">
        <Typography fontSize="40px" fontWeight="600" color="#1e7d19">
          "Jay Jawan Jay Kissan"
        </Typography>
        <Typography fontSize="18px" fontWeight="500">
          "Farmous is a platform for farmers that provides, one stop solution to
          all the problem that Indian Farmers face."
        </Typography>
      </Box>

      <Box display="flex" textAlign="center" marginTop="40px">
        <Stack width="50%" display="block">
          <Stack lineHeight="0.9">
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                margin: "auto",
                marginTop: "10px",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Gov Schemes
            </Link>
            <Link
              to="/govScheme"
              style={{
                textDecoration: "none",
                margin: "auto",
                marginTop: "10px",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Agri Store
            </Link>
            <Link
              to="/services"
              style={{
                textDecoration: "none",
                margin: "auto",
                marginTop: "10px",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Our Services
            </Link>
            <Link
              to="/aboutUs"
              style={{
                textDecoration: "none",
                margin: "auto",
                marginTop: "10px",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              About us
            </Link>
          </Stack>
        </Stack>

        <Box width="50%" justifyContent="center" padding="0 12%">
          <Typography style={{ fontSize: "20px", fontWeight: "600" }}>
            Follow us on
          </Typography>
          <Box display="flex" marginTop="20px">
            <InstagramIcon />
            <FacebookIcon />
            <YouTubeIcon />
            <TwitterIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
