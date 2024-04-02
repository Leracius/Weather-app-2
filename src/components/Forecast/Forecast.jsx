import React from "react";
import { ForecastContainer, MiniCard } from "./ForecastStyles";

const Forecast = ({ forecast }) => {
  const wheatherObj = {};
  wheatherObj.name = forecast.city.name;
  wheatherObj.list = forecast.list.slice(0, 6);

  const convertCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius + 1;
  };

  console.log();
  console.log(wheatherObj);

  return (
    <ForecastContainer>
      pronostico extendido:
      {wheatherObj.list.map((el) => {
        const dateW = new Date(el.dt * 1000);
        const hora = dateW.getHours();
        const minutos = dateW.getMinutes();
        return (
          <MiniCard>
            <h1>{convertCelsius(el.main.temp)}°</h1>
            <img
              src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
            ></img>
            <p key={el.dt}>
              {/* <TbClockHour9 /> */}
              {`${hora < 10 ? "0" + hora : hora}:${
                minutos < 10 ? "0" + minutos : minutos
              }`}
            </p>
            <p>
              {new Date(el.dt * 1000).toLocaleDateString("es-ES", {
                weekday: "long",
                timeZone: "UTC",
              })}
            </p>
          </MiniCard>
        );
      })}
    </ForecastContainer>
  );
};

export default Forecast;
