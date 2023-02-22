import React from "react";
import "../styles/AboutUs.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Box, Typography } from "@mui/material";
import { fontFamily } from "@mui/system";

const AboutUs = () => {
  return (
    <div>
      <Box sx={{ margin: { sx: "5px", md: "10px" } }}>
        <Typography variant="h3">We are Famous.</Typography>
        <Typography variant="h6">
          all we do is for the good and best of farmers
        </Typography>

        <Typography
          variant="h4"
          sx={{
            marginTop: "40px",
            padding: "0px",
            color: "#658864",
            fontFamily:
              "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
            fontWeight: "500",
          }}
        >
          Facilities with which we help Farmers who join our community
        </Typography>
        <Box
          sx={{
            margin: "20px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ marginTop: "0", marginBottom: "10px" }}>
                Farmous Agri Store
              </Card.Title>
              <Card.Text style={{ marginTop: "20px", color: "#727a74" }}>
                "Empowering the agricultural community with top-quality products
                and expert support. Our website offers a one-stop-shop for
                farmers, with a wide selection of the best seeds, fertilizers,
                pesticides, and other essential tools for successful crop
                production. Experience the difference in yield and quality, and
                join the revolution in sustainable agriculture."
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ marginTop: "0", marginBottom: "10px" }}>
                Updates of Gov Beneficial Schemes
              </Card.Title>
              <Card.Text style={{ marginTop: "20px", color: "#727a74" }}>
                "Stay informed and take advantage of government support with our
                website for farmers. Keep up-to-date on the latest beneficial
                schemes and make the most of your agricultural efforts."
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ marginTop: "0", marginBottom: "10px" }}>
                Weather Updates
              </Card.Title>
              <Card.Text style={{ marginTop: "20px", color: "#727a74" }}>
                "Maximize your crop yields and stay ahead of the weather with
                our website for farmers. Our platform provides you with
                real-time, local weather updates and forecasts, giving you the
                information you need to make informed decisions about your
                farming activities. Whether you're planting, harvesting, or
                protecting your crops from adverse weather conditions, our
                website has you covered."
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          {/* <Box
            sx={{
              padding: "20px",
              margin: "15px",
              width: "25%",
              height: "350px",
              backgroundColor: "#EEEEEE",
              border: "1.5px solid #DDDDDD",
              borderRadius: "5px",
              overflow: "wrap",
            }}
          >
            <Typography
              variant="h5"
              sx={{ marginTop: "0", marginBottom: "10px" }}
            >
              Weather Updates
            </Typography>

            <Typography
              variant="p"
              sx={{ marginTop: "20px", color: "#727a74" }}
            >
              "Maximize your crop yields and stay ahead of the weather with our
              website for farmers. Our platform provides you with real-time,
              local weather updates and forecasts, giving you the information
              you need to make informed decisions about your farming activities.
              Whether you're planting, harvesting, or protecting your crops from
              adverse weather conditions, our website has you covered."
            </Typography>
          </Box> */}
        </Box>

        <Box
          sx={{
            margin: "20px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ marginTop: "0", marginBottom: "10px" }}>
                Provide Loans
              </Card.Title>
              <Card.Text style={{ marginTop: "20px", color: "#727a74" }}>
                "Empowering farmers with accessible and affordable financing
                solutions. Our mission is to support the agricultural community
                by offering low-interest loans, helping farmers grow their
                businesses and recover from losses. "At{" "}
                <span style={{ fontWeight: "700" }}>Farmous</span>, we believe
                that every farmer deserves the opportunity to thrive. Whether
                you're looking to expand your business or recover from setbacks,
                we're here to provide the financial resources you need."
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Body>
              <Card.Title style={{ marginTop: "0", marginBottom: "10px" }}>
                Support
              </Card.Title>
              <Card.Text
                style={{ marginTop: "20px", color: "#727a74" }}
              ></Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUs;
