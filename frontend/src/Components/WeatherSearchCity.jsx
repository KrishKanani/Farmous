import { Typography } from "@mui/material";
import { fontSize } from "@mui/system";
import React, { useState } from "react";
import PerfectDay from "../assets/perfect-day.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const imageStyle = {
  width: "140px",
  height: "140px",
  margin: "40px auto",
};

const formStyle = {
  display: "flex",
  flexDirection: "row",
  fontSize: "18px",
  fontWeight: "bold",
  fontFamily: "Montserrat",
  margin: "20px auto",
  border: "black solid 1px",
  borderRadius: "2px",
};
const WeatherSearchCity = (props) => {
  const { updateCity, fetchWeather } = props;

  return (
    <div>
      <img src={PerfectDay} alt="" style={imageStyle} />

      <Typography
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          fontFamily: "Montserrat",
          margin: "10px auto",
        }}
      >
        Find Weather of your city
      </Typography>

      <form onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
    </div>
  );
};

export default WeatherSearchCity;
