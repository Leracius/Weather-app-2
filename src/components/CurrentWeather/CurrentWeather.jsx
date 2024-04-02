import React, { useState } from "react";
import styled from "styled-components";
import { requestCurrent } from "../../axios/Request";
import { TbClockHour9 } from "react-icons/tb";
import { formatDate } from "../../axios/Request";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Forecast from "../Forecast/Forecast";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);
  const [expanded, SetExpand] = useState(true);

  const convertCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius + 1;
  };

  const getCurrentWeather = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const data = requestCurrent(lat, lon);
      data.then((res) => setWeather(res.data));
    });
  };

  const expand = () => {
    SetExpand(!expanded);
  };

  return (
    <Container isExpanded={expanded}>
      {weather ? (
        <WeatherInfo>
          <Flag
            className={`fi fi-${weather.city.country.toLowerCase()}`}
          ></Flag>
          <h1 onClick={expand}>
            {weather.city.name} {convertCelsius(weather.list[0].main.temp)}°
            <img
              src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
            ></img>
          </h1>
          {!expanded && <Forecast forecast={weather} />}

          {/* <TbClockHour9 />
          <p>{formatDate(new Date(weather.list[0].dt * 1000))}</p>
          <button onClick={showDates(weather.list)}>check</button> */}
        </WeatherInfo>
      ) : (
        <h1 onClick={getCurrentWeather}>Obtener info de ciudad</h1>
      )}
    </Container>
  );
};

export default CurrentWeather;

export const Container = styled.div`
  height: ${({ isExpanded }) => (isExpanded ? "100px" : "400px")};
  background-color: #15202b80;
  transition: height 1s ease 0s;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
  h1 {
    border: none;
    background-color: transparent;
    &:hover {
      color: #b1d8ff;
      cursor: pointer;
    }
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
      font-size: 30px;
    }
    img {
      width: 80px;
      @media (max-width: 767px) {
        width: 50px;
      }
    }
  }
`;

const Flag = styled.span`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100px;
  height: 100px;
  @media (max-width: 767px) {
    width: 60px;
    top: 0;
  }
`;
