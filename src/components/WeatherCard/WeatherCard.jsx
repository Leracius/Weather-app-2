import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlineRefresh } from "react-icons/md";
import { FaThermometerHalf } from "react-icons/fa";
import { TbClockHour9 } from "react-icons/tb";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import {
  Container,
  CardClima,
  Close,
  ClimaInfo,
  ClimaImg,
  ClimaTemp,
  ClimaMaxMin,
  ClimHum,
} from "./WeatherCardStyles";

export const WeatherCard = (props) => {
  const cities = Object.values(props)[0];

  const convertCelsius = (kelvin) => {
    const celsius = Math.round(kelvin - 273.15);
    return celsius + 1;
  };

  const currentCities = (e) => {
    e.stopPropagation();
    if (confirm("Desea eliminar esta ciudad?")) {
      const cityId = e.currentTarget.dataset.id;
      const updatedCities = cities.filter((el) => el.id !== parseInt(cityId));
      console.log(updatedCities);
      props.setCities(updatedCities);
    } else {
      return;
    }
  };

  return cities.map((el) => {
    return (
      <Container key={el.id}>
        <CardClima>
          <Close data-id={el.id} onClick={currentCities}>
            <MdDelete size={30} />
          </Close>
          <ClimaInfo>
            <h2>
              {el.name}
              <span className={`fi fi-${el.sys.country.toLowerCase()}`}></span>
            </h2>
            <p>{el.weather[0].description}</p>
            <p>
              <TbClockHour9 />
              {el.ts}
            </p>
            <div>
              <span>{convertCelsius(el.main.temp)}°</span>
              <img
                src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
              ></img>
            </div>
          </ClimaInfo>
          <ClimaTemp>
            <div>
              <ClimaMaxMin>
                <FaArrowUp size={20} />
                Max: {convertCelsius(el.main.temp_max)}°
              </ClimaMaxMin>
              <ClimaMaxMin>
                <FaArrowDown size={20} />
                Min: {convertCelsius(el.main.temp_min)}°
              </ClimaMaxMin>
              <ClimaMaxMin>
                <FaThermometerHalf size={20} />
                St: {convertCelsius(el.main.feels_like)}°
              </ClimaMaxMin>
              <ClimHum>{el.main.humidity}% Humedad</ClimHum>
            </div>
          </ClimaTemp>
        </CardClima>
      </Container>
    );
  });
};

export default WeatherCard;
