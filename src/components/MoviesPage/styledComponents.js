import styled from "styled-components";

export const LoaderContainer = styled.div`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MoviesPageApp = styled.div`
  width: 95vw;
  border: 1px solid #161213;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainHeading = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 50px;
  font-weight: bold;
`;

export const DetailsContainer = styled.ul`
  width: 85vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const NextPageContainer = styled.div`
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const PageNumber = styled.p`
  height: 10px;
  width: 10px;
  color: #000000;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #000000;
  background-color: #e6f592;
`;

export const NextButton = styled.button`
  border: 1px solid #031716;
  background-color: #93f5f2;
  height: 36px;
  width: 60px;
`;
