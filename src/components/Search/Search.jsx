import React, { useState } from "react";
import styled from "styled-components";
import { requestCity } from "../../axios/Request";
import { WeatherCard } from "../WeatherCard/WeatherCard";
import { Container, SearchContainer, Wait, Title, Hour } from "./SearchStyles";

export const Search = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );

  const [error, setError] = useState("");
  const setRequest = (e) => {
    e.preventDefault();
    if (!city) {
      alert("Campo vacío");
      return;
    }
    requestCity(city)
      .then((res) => {
        const cityName = res.data.name.toLowerCase();
        const cityExists = cities.some(
          (c) => c.name.toLowerCase() === cityName
        );
        if (!cityExists) {
          setCities([res.data, ...cities]);
          saveLocalStorage([res.data, ...cities]);
        } else {
          alert("La ciudad ya ha sido agregada anteriormente.");
        }
      })
      .catch((err) => {
        setError(err.message);
        alert("No se encontró la ciudad");
      });
    setCity("");
  };

  const saveLocalStorage = (citiesList) => {
    localStorage.setItem("cities", JSON.stringify(citiesList));
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  return (
    <Container>
      <SearchContainer>
        <Title>El clima en</Title>
        <form>
          {/* <button onClick={}>check data</button> */}
          <button onClick={setRequest}>🔎</button>
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleCity}
            placeholder="Buscar Ciudad"
          />
        </form>
        <Hour></Hour>
      </SearchContainer>
      {!cities ? (
        <Wait>Ingrese una ciudad...</Wait>
      ) : (
        <WeatherCard cityList={cities} />
      )}
    </Container>
  );
};

export default Search;
