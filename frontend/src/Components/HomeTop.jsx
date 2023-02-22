import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import FarmerVectorImage from "../assets/FarmerVectorImage.png";

const HomeTop = () => {
  return (
    <Box sx={{ justifyContent: "center", display: "flex", margin: "10px" }}>
      <Stack direction="column">
        <Stack direction="row" sx={{ margin: "20px" }}>
          <Box
            sx={{
              marginTop: "40px",
              marginLeft: "20px",
              width: { sm: "200px", md: "400px", lg: "560px", xl: "700px" },
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "60px",
              justifyContent: "left",
            }}
          >
            Farmous Connector: Get informed about the latest government schemes
            <span style={{ color: "#68B984" }}>.</span>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "20px",
                lineHeight: "22px",
                color: "rgba(0,0,0,0.5)",
              }}
            >
              Get connected to government schemes for farmers with
              FarmerConnector.
            </Typography>
          </Box>
          <Box
            sx={{
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "60px",
            }}
          >
            <img
              src={FarmerVectorImage}
              alt="Image of Farmer"
              style={{ width: "600px", height: "500px" }}
            />
          </Box>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ marginTop: "20px" }}></Stack>
      </Stack>
    </Box>
  );
};

export default HomeTop;
