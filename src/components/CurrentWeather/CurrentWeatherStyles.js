import styled from "styled-components";

export const Container = styled.div`
  height: ${({ isExpanded }) => (isExpanded ? "100px" : "350px")};
  background-color: #15202b80;
  transition: height 1s ease 0s;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
  @media (max-width: 767px) {
    height: ${({ isExpanded }) => (isExpanded ? "60px" : "520px")};
  }
  h1 {
    font-size: 30px;
    border: none;
    background-color: transparent;
    height: 100%;
    &:hover {
      color: #b1d8ff;
      cursor: pointer;
    }
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  width: 100%;
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

export const Flag = styled.span`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 100px;
  height: 100px;
  @media (max-width: 767px) {
    display: none;
  }
`;
