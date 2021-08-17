import styled from "styled-components";

export const NavContainer = styled.div`
  background-image: linear-gradient(to left, #77f2c9, #f277a0);
  height: 60px;
  width: 93vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const LinksContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageElement = styled.img`
  width: 30px;
  height: 30px;
`;

export const NavbarButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`;
