import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const GovSchemeDetail = () => {
  return (
    <Stack
      direction="column"
      sx={{
        background: "#f5fcf5",
        margin: "4px",
        justifyContent: "center",
        width: { sm: "100%", md: "600px", lg: "1100px" },
        margin: "auto",
        borderRadius: "6px",
        padding: "2px",
      }}
    >
      <Box sx={{ margin: { sm: "2px", md: "5px", lg: "10px" } }}>
        <Typography variant="h4" sx={{ fontWeight: "700" }}>
          Scheme Name
          <span style={{ color: "#68B984", fontSize: "40px" }}>.</span>
        </Typography>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          Start date: 15-Feb-2022 - End date: 4-March-2023
        </Typography>

        {/* Eligibility  */}
        <Typography
          sx={{ fontSize: "22px", fontWeight: "700", marginTop: "34px" }}
        >
          Eligibility for Scheme
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

        <Typography
          sx={{ fontSize: "22px", fontWeight: "700", marginTop: "34px" }}
        >
          How to Apply
        </Typography>
        <Typography variant="p" sx={{ color: "rgba(0, 0, 0, 0.6)" }}>
          You can use the text-transform CSS property to capitalize text in
          different forms. This property can modify text to be in uppercase,
          lowercase, or capitalized (so that each word begins with a capital
          letter and the remaining characters in the word retain their original
          form).You can use the text-transform CSS property to capitalize text
          in different forms. This property can modify text to be in uppercase,
          lowercase, or capitalized (so that each word begins with a capital
          letter and the remaining characters in the word retain their original
          form).You can use the text-transform CSS property to capitalize text
          in different forms. This property can modify text to be in uppercase,
          lowercase, or capitalized (so that each word begins with a capital
          letter and the remaining characters in the word retain their original
          form).
        </Typography>
      </Box>
    </Stack>
  );
};

export default GovSchemeDetail;
