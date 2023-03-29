import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
const LoanCalculator = () => {
  const [PrincipleAmount, setPrincipleAmount] = useState();
  const [InterestRate, setInterestRate] = useState();
  const [TimePeriod, setTimePeriod] = useState();
  console.log(PrincipleAmount);
  console.log(InterestRate);
  console.log(TimePeriod);
  return (
    <Stack>
      <Typography
        variant="h4"
        sx={{ margin: "20px", justifyContent: "center", display: "flex" }}
      >
        Loan Calculator
      </Typography>

      {/* Input to take Principle Amount  */}
      <Box
        sx={{
          margin: "auto",
          width: { sm: "1440" },
          alignItems: "center",
          justifyContent: "center",
          display: "block",
          gap: "30px",
        }}
      >
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Typography sx={{ margin: "6px", fontWeight: "600" }}>
            Total Loan Amount:
          </Typography>
          <input
            name="principleAmount"
            type="text"
            placeholder="Enter the total amount"
            style={{
              outline: "none",
              borderRadius: "4px",
              border: "none",
              background: "#EEEEEE",
              padding: "5px",
              textAlign: "center",
            }}
            onChange={(e) => setPrincipleAmount(e.target.value)}
          />
        </Box>

        {/* Input to take the Interest Rate  */}
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Typography sx={{ marginTop: "6px", fontWeight: "600" }}>
            Interest Rate:
          </Typography>
          <input
            name="interestRate"
            type="text"
            placeholder="Enter the Interest Rate"
            style={{
              outline: "none",
              borderRadius: "4px",
              border: "none",
              background: "#EEEEEE",
              padding: "5px",
              textAlign: "center",
            }}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </Box>

        {/* Input to take Duration of Loan  */}
        <Box sx={{ display: "flex", padding: "10px" }}>
          <Typography sx={{ marginTop: "6px", fontWeight: "600" }}>
            Duration of Loan Period:
          </Typography>
          <input
            name="timeperiod"
            type="text"
            placeholder="Enter the Time Period"
            style={{
              outline: "none",
              borderRadius: "4px",
              border: "none",
              background: "#EEEEEE",
              padding: "5px",
              textAlign: "center",
            }}
            onChange={(e) => setTimePeriod(e.target.value)}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default LoanCalculator;
