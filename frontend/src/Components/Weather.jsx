import { Box, Stack, Typography } from "@mui/material";
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
    // console.log(weather);
  };
  return (
    <Box
      sx={{
        marginBottom: "100px",
        marginTop: "40px",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{textAlign: "center", background: "#e7fae6", height: "120px", padding:"30px" }}>
        <Typography sx={{ fontSize: "26px", fontWeight: "600" }}>
          Search here for the weather condition in your city..
        </Typography>
        <Typography>
          Farmous Weather condidition updates are accurate, which help you to
          know the exact condition of your city and can save your losses in
          field.
        </Typography>
      </Box>
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
    </Box>
  );
};

export default Weather;
