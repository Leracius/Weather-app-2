import React, { useState } from "react";
import { requestCurrent } from "../../axios/Request";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Forecast from "../Forecast/Forecast";
import { Container, WeatherInfo, Flag } from "./CurrentWeatherStyles";

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
        <WeatherInfo>
          <h1 onClick={getCurrentWeather}>Obtener info de ciudad</h1>
        </WeatherInfo>
      )}
    </Container>
  );
};

export default CurrentWeather;
