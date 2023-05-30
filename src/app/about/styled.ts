import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
