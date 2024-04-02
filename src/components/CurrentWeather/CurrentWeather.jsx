import React, { useState } from "react";
import { requestCurrent } from "../../axios/Request";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Forecast from "../Forecast/Forecast";
import {
  Container,
  WeatherInfo,
  Flag,
  TitleInfo,
} from "./CurrentWeatherStyles";

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
          <TitleInfo onClick={expand}>
            {weather.city.name} {convertCelsius(weather.list[0].main.temp)}°
            <Flag
              className={`fi fi-${weather.city.country.toLowerCase()}`}
            ></Flag>
          </TitleInfo>
          {!expanded && <Forecast forecast={weather} />}
        </WeatherInfo>
      ) : (
        <WeatherInfo>
          <TitleInfo onClick={getCurrentWeather}>ver mi ciudad</TitleInfo>
        </WeatherInfo>
      )}
    </Container>
  );
};

export default CurrentWeather;
