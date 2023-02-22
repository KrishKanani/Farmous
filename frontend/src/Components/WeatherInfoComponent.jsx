import { Stack, Box } from "@mui/material";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import PerfectDay from "../assets/perfect-day.svg";
import Temperature from "../assets/temp.svg";
import Humidity from "../assets/humidity.svg";
import Wind from "../assets/wind.svg";
import Pressure from "../assets/pressure.svg";

const imageStyle = {
  width: "100px",
  height: "100px",
  margin: "5px auto",
};

// export const WeatherInfoIcons = {
//   sunset: "../assets/temp.svg",
//   sunrise: "../assets/temp.svg",
//   humidity: "../assets/humidity.svg",
//   wind: "../assets/wind.svg",
//   pressure: "../assets/pressure.svg",
// };

// export const WeatherInfoIcons = {
//   suset: "../assets/humidity.svg",
//   sunrise: Temperature.default,
//   humidity: { Humidity },
//   wind: { Wind },
//   pressure: { Pressure },
// };

// const WeatherInfo = (props) => {
//   const { name, value } = props;
//   console.log(name);
//   return (
//     <>
//       {/* INFO CONTAINER   */}
//       <div
//         style={{
//           display: "flex",
//           margin: "5px 10px",
//           flexDirection: "row",
//           justifyContent: "space-evenly",
//           alignItems: "center",
//         }}
//       >
//         {/* INFO Icon  */}
//         <img
//           src={WeatherInfoIcons[name]}
//           alt=""
//           style={{ width: "36px", height: "36px" }}
//         />

//         {/* INFO LABEL   */}
//         <span
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             fontSize: "14px",
//             margin: "15px",
//           }}
//         >
//           {value}
//           <span>{name}</span>
//         </span>
//       </div>
//     </>
//   );
// };

const WeatherInfoComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  const TimetoSunsetOrRise = getTime(
    weather?.sys[isDay ? "sunset" : "sunrise"]
  );
  return (
    <div>
      {/* Weather Condition */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          fontFamily: "Montserrat",
          alignItems: "center",
          width: "350px",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        {/* Conditions */}
        <Box
          sx={{
            margin: "20px auto",
            textTransform: "capitalize",
            fontSize: "14px",
          }}
        >
          <span style={{ fontSize: "28px" }}>
            {`${Math.floor(weather?.main?.temp - 273)} °C`}{" "}
          </span>
          {`| ${weather?.weather[0].description}`}
        </Box>

        {/*Weather Logo*/}
        <img src={PerfectDay} alt="" style={imageStyle} />
      </Stack>
      <Box>
        <h5
          style={{
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          {`${weather?.name}, ${weather?.sys?.country}`}
        </h5>
        <h6
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            margin: "20px 25px 10px",
            textAlign: "start",
            width: "90%",
          }}
        >
          Weather Info
        </h6>

        {/* WEATHER INFO CONTAINER  */}
        <Box
          sx={{
            display: "flex",
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "5px 10px",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* INFO Icon  */}
            <img
              src={Temperature}
              alt=""
              style={{ width: "36px", height: "36px" }}
            />

            {/* INFO LABEL   */}
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                margin: "15px",
              }}
            >
              {TimetoSunsetOrRise}
              <span>{`${isDay ? "Sunset" : "Sunrise"}`}</span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              margin: "5px 10px",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* INFO Icon  */}
            <img
              src={Humidity}
              alt=""
              style={{ width: "36px", height: "36px" }}
            />

            {/* INFO LABEL   */}
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                margin: "15px",
              }}
            >
              {`${weather?.main?.humidity}`}
              <span>Humidity</span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              margin: "5px 10px",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* INFO Icon  */}
            <img src={Wind} alt="" style={{ width: "36px", height: "36px" }} />

            {/* INFO LABEL   */}
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                margin: "15px",
              }}
            >
              {`${weather?.wind?.speed}`}
              <span>Wind</span>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              margin: "5px 10px",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* INFO Icon  */}
            <img
              src={Pressure}
              alt=""
              style={{ width: "36px", height: "36px" }}
            />

            {/* INFO LABEL   */}
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
                margin: "15px",
              }}
            >
              {`${weather?.main?.pressure}`}
              <span>Pressure</span>
            </span>
          </div>
          {/* <WeatherInfo name="sunrise" value="" />
          <WeatherInfo name="humidity" value="" />
          <WeatherInfo name="wind" value="" />
          <WeatherInfo name="pressure" value="" /> */}
        </Box>
      </Box>
    </div>
  );
};

export default WeatherInfoComponent;
