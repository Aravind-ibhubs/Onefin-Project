import styled from "styled-components";

export const LoginAppContainer = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  height: 75vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  border: 1px solid #090909;
  @media screen (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const LoginSideContainer = styled.div`
  background-image: linear-gradient(to right, #8cabe9, #e9ca8c);
  height: 35vh;
  width: 90vw;
  border: 1px solid #090909;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen (min-width: 768px) {
    height: 50vh;
  }
`;

export const LoginSideText = styled.h1`
  font-family: cursive;
  width: 50vw;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 20px;
`;

export const InputLabel = styled.label`
  color: #1c1321;
  font-family: sans-serif;
  font-weight: bold;
`;

export const InputElement = styled.input`
  border-width: 1px solid #906aa3;
  color: #000000;
  padding: 10px;
  width: 70vw;
  margin-top: 10px;
`;

export const ErrorMessageField = styled.p`
  color: #f13013;
  font-family: sans-serif;
`;

export const LoginSubmitButton = styled.button`
  color: #000000;
  background-color: #77f0f3;
  height: 30px;
  width: 70px;
  padding: 10px;
  border-radius: 10px;
  border-width: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LoginLoader = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
