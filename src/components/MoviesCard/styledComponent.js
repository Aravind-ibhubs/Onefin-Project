import styled from "styled-components";

export const CardContainer = styled.li`
  list-style-type: none;
  width: 80vw;
  height: 30vh;
  border: 1px solid #32092f;
  background-color: #be9bbc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px;
  border-radius: 15px;
  flex-grow: 0;
  @media screen (min-width: 768px) {
    width: 250px;
    height: 300px;
  }
`;

export const InitialLetter = styled.h1`
  height: 40px;
  width: 35px;
  border-radius: 30px;
  padding: 10px;
  color: #233230;
  background-color: #cbcdcd;
  border: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DetailsCard = styled.div`
  height: 20vh;
  overflow: none;
  justify-content: flex-start;
  @media screen (min-width: 768px) {
    height: 25vh;
  }
`;

export const NormalHeading = styled.h1`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 20px;
  color: #1b201f;
`;

export const NormalDescription = styled.span`
  color: #7e8181;
  font-size: 15px;
`;
