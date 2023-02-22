import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Axios from "axios";
import WeatherSearchCity from "./WeatherSearchCity";
import WeatherInfoComponent from "./WeatherInfoComponent";
const Weather = () => {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
      // fe4feefa8543e06d4f3c66d92c61b69c
    );

    updateWeather(response.data);
    console.log(weather);
  };
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        marginTop: "20px",
        alignItems: "center",
        boxShadow: "0 3px 6px 0 #555",
        padding: "20px 10px",
        borderRadius: "5px",
        width: "380px",
        background: "#e7fae6",
        fontFamily: "Montserrat",
      }}
    >
      {/* CITY COMPONENT */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {weather ? (
          <WeatherInfoComponent weather={weather} />
        ) : (
          <WeatherSearchCity
            updateCity={updateCity}
            fetchWeather={fetchWeather}
          />
        )}
      </Box>

      {/* WEATHER COMPONENT */}
      {/* <Box>
        <WeatherInfoComponent />
      </Box> */}
    </Stack>
  );
};

export default Weather;
