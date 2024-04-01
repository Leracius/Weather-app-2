import React, { useState } from "react";
import styled from "styled-components";
import { requestCurrent } from "../../axios/Request";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const CurrentWeather = () => {
  const [weather, setWeather] = useState(null);

  const convertCelsius = (kelvin) => {
    console.log(weather.list);
    const celsius = Math.round(kelvin - 273.15);
    return celsius + 1;
  };

  const getCurrentWeather = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const data = requestCurrent(lat, lon);
      data.then((res) => setWeather(res.data));
    });
  };

  return (
    <Container>
      {weather ? (
        <WeatherInfo>
          <Flag
            className={`fi fi-${weather.city.country.toLowerCase()}`}
          ></Flag>
          <h1>
            {weather.city.name} {convertCelsius(weather.list[0].main.temp)}°
            <img
              src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`}
            ></img>
          </h1>
        </WeatherInfo>
      ) : (
        <button onClick={getCurrentWeather}>
          <h1>Ver clima de mi ciudad</h1>
        </button>
      )}
    </Container>
  );
};

export default CurrentWeather;

export const Container = styled.div`
  background-color: #15202b80;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  button {
    border: none;
    background-color: transparent;
    &:hover {
      color: #b1d8ff;
      cursor: pointer;
      scale: 1.1;
    }
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
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
