import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const GovSchemeCard = () => {
  const [schemeName, setSchemeName] = useState("");
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`govSchemeDetail`);
  };

  return (
    <Stack direction="column" sx={{ width: "800px", margin: "auto" }}>
      <Box
        sx={{
          width: "800px",
          margin: "auto",
          padding: "12px",
          background: "#f5fcf5",
          borderRadius: "4px",
          // justifyContent: "center",
          // display: "flex",
        }}
      >
        <Typography sx={{ fontSize: "34px", fontWeight: "700" }}>
          Name of the Government Scheme
          <span style={{ color: "#68B984" }}>.</span>
        </Typography>
        <Typography>
          <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
            Start date: 15-Feb-2022 - End date: 4-March-2023
          </Typography>
        </Typography>
        {/* Eligibility  */}
        <Typography sx={{ fontSize: "22px", fontWeight: "700" }}>
          Eligibility
        </Typography>
        <Typography variant="p" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          New Agricultural Marketing Infrastructure (AMI) sub scheme of ISAM
          Agri Clinics and Agri Business Centres Scheme (ACABC) National
          Livestock Mission - Entrepreneurship Development & Employment
          Generation (NLM-EDEG) Dairy Entrepreneurship Development Scheme (DEDS)
          Commercial production units of organic inputs - National Project on
          Organic Farming (NPOF) GSS – Ensuring End Use of Subsidy Released
          Interest Subvention Scheme
        </Typography>

        {/* View More Button  */}
      </Box>

      <Button
        className="btn btn-sign-up"
        sx={{
          border: "none",
          borderRadius: "3px",
          fontSize: "16px",
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
        onClick={onClickHandler}
      >
        More Info
      </Button>
    </Stack>
  );
};

export default GovSchemeCard;
