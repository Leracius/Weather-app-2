import styled from "styled-components";

export const Container = styled.div`
  height: ${({ isExpanded }) => (isExpanded ? "85px" : "330px")};
  background-color: #084263;
  transition: height 1s ease 0s;
  width: 100%;
  max-width: 700px;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  margin-bottom: 20px;
  overflow: hidden;
  @media (max-width: 767px) {
    height: ${({ isExpanded }) => (isExpanded ? "60px" : "500px")};
    padding: 10px;
    position: fixed;
    z-index: 10;
    top: 10px;
    border: 3px solid white;
    border-radius: 10px;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const TitleInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
  gap: 10px;
  @media (max-width: 767px) {
    font-size: 25px;
    font-weight: 600;
    height: 60px;
  }
  img {
    width: 80px;
    @media (max-width: 767px) {
      width: 70px;
    }
  }
`;

export const Flag = styled.span`
  /* position: absolute;
  left: 20px;
  top: 20px;
  width: 100px;
  height: 100px; */
  /* @media (max-width: 767px) {
    display: none;
  } */
`;
