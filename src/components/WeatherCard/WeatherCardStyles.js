import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardClima = styled.div`
  border: 5px solid #15202b80;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  background-color: rgba(34, 36, 71, 1);
  padding: 30px 10px 10px 10px;
  border-radius: 10px;
  position: relative;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const Close = styled.button`
  position: absolute;
  z-index: 2;
  right: 20px;
  top: 20px;
  font-size: 20px;
  color: rgba(250, 250, 250, 0.5);
  cursor: pointer;
  border-style: none;
  background-color: transparent;
  &:hover {
    scale: 1.2;
    color: white;
  }
`;

export const ClimaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #15202b80;
  border-radius: 10px;
  padding: 10px;
  @media (max-width: 767px) {
    align-items: center;
  }
  h2 {
    position: absolute;
    transform: translateY(-60px);
    font-size: 35px;
    display: flex;
    gap: 20px;
    font-weight: 600;
    border-radius: 10px;
    padding: 0 10px;
    background-color: #222447;
    border: 5px solid #15202b80;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }
  p {
    margin-left: 20px;
    font-size: 16px;
    color: rgb(235, 235, 245, 0.6);
    display: flex;
    gap: 5px;
    align-items: center;
  }
  div {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    font-size: 60px;
    font-weight: 600;
    background-color: #15202b80;
    width: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    img {
      width: 80px;
    }
    /* span {
    } */
  }
`;

export const ClimaImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 160px;
  }
`;

export const ClimaTemp = styled.div`
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    position: relative;
    padding: 10px;
    background-color: #15202b80;
    border-radius: 10px;

    @media (max-width: 767px) {
      align-items: center;
    }
  }
`;

export const ClimaMaxMin = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

export const ClimHum = styled.span`
  padding: 5px;
  border-radius: 10px;
  width: 100%;
  background-color: #15202b80;
  text-align: center;
`;
