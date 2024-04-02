import styled from "styled-components";

export const ForecastContainer = styled.div`
  display: flex;
  justify-content: center;
  transition: all 0.5s cubic-bezier(0.92, 0.01, 0.35, 0.99);
  width: 100%;
  background-color: #222447;
  border-radius: 10px;
  border: 5px solid #15202b80;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 10px;
    background-color: transparent;
    border: none;
  }
`;

export const MiniCard = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    height: 60px;
    background-color: #222447;
  }
  h1 {
    font-size: 50px;
    margin: 0;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }
  p {
    text-align: center;
  }
`;
