import React from "react";
import { formatDate } from "../../axios/Request";
import styled from "styled-components";
import { TbClockHour9 } from "react-icons/tb";

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

export const ForecastContainer = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  width: 100%;
`;

export const MiniCard = styled.div`
  background-color: #ffffff27;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  h1 {
    font-size: 50px;
    margin: 0;
    font-weight: 300;
  }
  p {
    text-align: center;
  }
`;
