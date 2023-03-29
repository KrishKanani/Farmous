import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";

const HomePageLoan = () => {
  const inputStyle = { outline: "none", border: "none", paddingLeft: "25px" };
  const inputBoxStyle = {
    padding: "8px 20px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.5)",
    borderRight: "1px solid rgba(255, 255, 255, 0.2)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    backgroundColor: "#f7fcf7",
  };
  return (
    <Box
      sx={{
        boxSizing: "content-box",
        height: "820px",
        margin: "50px 0px 20px 0px",
        padding: "100px 100px 100px 100px",
        background: "#e7fae6",
        fontFamily: "Segoe UI",
      }}
    >
      <Typography
        sx={{
          position: "relative",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "700",
        }}
      >
        <AccountBalanceIcon sx={{ fontSize: "50px", paddingBottom: "8px" }} />{" "}
        Best Loan Service for Farmers
        <span style={{ color: "#68B984" }}>.</span>
      </Typography>
      <Box
        sx={{
          margin: "20px 50px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "22%",
            height: "60px",
            background: "#bcebb9",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              margin: "8% 3%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            SBI Bank
          </Typography>
          <Typography
            sx={{
              margin: "0",
              color: "rgba(0,0,0, 0.5)",
              padding: "10px",
              background: "#d9edd8",
              height: "160px",
            }}
          >
            SBI Agri loan covers the entire range of agricultural activities
            from the Farm to the Fork. It offers loans for crop production in
            the form of ACC / KCC.
          </Typography>
          <Box
            sx={{
              width: "212px",
              height: "50px",
              background: "#658864",
              padding: "10px",
              "&:hover": {
                background: "#4a784a",
              },
            }}
          >
            <a
              href="https://sbi.co.in/web/agri-rural/agriculture-banking/crop-loan"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "17px",
              }}
            >
              Read More
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            width: "22%",
            height: "60px",
            background: "#bcebb9",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              margin: "8% 3%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            HDFC Bank
          </Typography>
          <Typography
            sx={{
              margin: "0",
              color: "rgba(0,0,0, 0.5)",
              padding: "10px",
              background: "#d9edd8",
              height: "160px",
            }}
          >
            It benefits of world-class banking reach all sectors and parts of
            the country
          </Typography>
          <Box
            sx={{
              width: "212px",
              height: "50px",
              background: "#658864",
              padding: "10px",
              "&:hover": {
                background: "#4a784a",
              },
            }}
          >
            <a
              href="https://www.hdfcbank.com/agri"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "17px",
              }}
            >
              Read More
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            width: "22%",
            height: "60px",
            background: "#bcebb9",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              margin: "8% 3%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            ICIC Bank
          </Typography>
          <Typography
            sx={{
              margin: "0",
              color: "rgba(0,0,0, 0.5)",
              padding: "10px",
              background: "#d9edd8",
              height: "160px",
            }}
          >
            Through the ICICI Bank agriculture loan, the farmers can purchase
            farm animals or agricultural equipment.
          </Typography>
          <Box
            sx={{
              width: "212px",
              height: "50px",
              background: "#658864",
              padding: "10px",
              "&:hover": {
                background: "#4a784a",
              },
            }}
          >
            <a
              href="https://www.icicibank.com/rural/loans/farmer-finance"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "17px",
              }}
            >
              Read More
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            width: "22%",
            height: "60px",
            background: "#bcebb9",
            textAlign: "center",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{
              margin: "8% 3%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Axis Bank
          </Typography>
          <Typography
            sx={{
              margin: "0",
              color: "rgba(0,0,0, 0.5)",
              padding: "10px",
              background: "#d9edd8",
              height: "160px",
            }}
          >
            The Bank provides a product called Contract Farming, in which loan
            agreements are made between the farmers and corporates.
          </Typography>
          <Box
            sx={{
              width: "212px",
              height: "50px",
              background: "#658864",
              padding: "10px",
              "&:hover": {
                background: "#4a784a",
              },
            }}
          >
            <a
              href="https://www.axisbank.com/agri-and-rural/loans"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "17px",
              }}
            >
              Read More
            </a>
          </Box>
        </Box>
      </Box>

      <Box style={{ margin: "300px 50px 30px 50px", display: "flex" }}>
        <Box sx={{ width: "60%" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#448756",
              margin: "20px 0",
            }}
          >
            GET EASY LOAN
          </Typography>
          <Typography sx={{ fontSize: "40px", fontWeight: "700" }}>
            Request a Bank Call
          </Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.5)", fontSize: "17px" }}>
            Request a direct call from bank by filling the form.Provide the
            service you want from the Bank.
          </Typography>

          <Box sx={{ display: "flex", margin: "30px 0px" }}>
            <Box>
              <Typography sx={{ fontSize: "46px", fontWeight: "800" }}>
                453
              </Typography>
              <Typography
                sx={{ fontSize: "18px", color: "#448756", fontWeight: "600" }}
              >
                Today's Request
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "46px", fontWeight: "800" }}>
                45000<span style={{ color: "#448756", opacity: "0.6" }}>+</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#448756",
                  fontWeight: "600",
                }}
              >
                Happy Farmers
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "46px", fontWeight: "800" }}>
                5000<span style={{ color: "#448756", opacity: ".5" }}>+</span>
              </Typography>
              <Typography
                sx={{ fontSize: "18px", color: "#448756", fontWeight: "600" }}
              >
                Loan Granted
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "38%",
            background: "#658864",
            padding: "20px",
          }}
        >
          <Box
            style={inputBoxStyle}
            sx={{
              margin: "60px 20px 20px 20px",
              height: "46px",
              width: "284px",
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
              type="contact"
              style={inputStyle}
              name="contact"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter name"
            />
          </Box>

          <Box
            style={inputBoxStyle}
            sx={{
              margin: "20px",
              height: "46px",
              width: "284px",
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
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter mobile number"
            />
          </Box>

          <Button
            className="btn btn-sign-up"
            sx={{
              width: "280px",
              margin: "20px",
              padding: "10px",
              border: "none",
              borderRadius: "3px",
              fontSize: "16px",
              backgroundColor: "#446143",
              color: "#e1e8df",
              borderTop: "1px solid rgba(255, 255, 255, 0.6)",
              textTransform: "capitalize",
              "&:hover": {
                color: "#e1e8df",
                backgroundColor: "#446143",
              },
            }}
          >
            Request Call
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageLoan;
