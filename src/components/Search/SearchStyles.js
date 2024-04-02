import styled from "styled-components";

export const Container = styled.div`
  background-color: #15202b80;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 40px 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 767px) {
    padding: 0;
    background-color: transparent;
  }
`;

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  background-color: #15202b80;
  /* border: 5px solid #15202b80; */
  padding: 10px;
  border-radius: 10px;
  align-items: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    border: none;
  }
  form {
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
    gap: 0;
    justify-content: center;
    button {
      background-color: #15202b80;
      outline: none;
      border: none;
      color: rgba(250, 250, 250, 0.7);
      padding: 8px 10px;
      margin-right: 0;
      border-radius: 10px 0 0 10px;
    }
    input {
      background-color: #15202b80;
      outline: none;
      border: none;
      font-size: 20px;
      padding: 8px 5px;
      color: rgba(250, 250, 250, 0.5);
      border-radius: 0 10px 10px 0;
      width: 100%;
      max-width: 300px;
      font-family: "Poppins", sans-serif;
      &::placeholder {
        color: rgba(250, 250, 250, 0.5);
      }
    }
  }
`;

export const Wait = styled.p`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  grid-area: 1 / 1 / 2 / 2;
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  @media (max-width: 767px) {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

export const Hour = styled.div`
  grid-area: 1 / 2 / 3 / 3;
  background-color: #15202b80;
  border-radius: 10px;
  height: 100%;
`;
