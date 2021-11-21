import styled from "styled-components";

export const Row = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: ${({ flex }) => flex || "column"};
  justify-content: ${({ justify }) => justify || "center"};
  background-color: #d4d4d4;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const Section = styled.div`
  padding: 10px;
  border-radius: 5px;
  /* background-color: #e0e0e0; */
  margin: 0px 5px;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  align-self: center;
  width: 500px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  outline: none;
  background-color: #383838;
  color: white;
  font-size: 1.8rem;
  font-family: "Roboto Mono", monospace;
  margin: 5px 0px;
`;

export const Display = styled.div`
  width: fit-content;
  padding: 5px;
  font-size: 3rem;
  align-self: center;
`;

export const Button = styled.button`
  width: fit-content;
  margin: 10px 0px;
  outline: none;
  border: none;
  background-color: #383838;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  padding: 2px;
  align-self: center;
  padding: 10px;
  min-width: 100px;
  font-family: "Roboto Mono", monospace;
  cursor: pointer;
  font-weight: 200;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.div`
  text-align: center;
  font-size: 4rem;
  padding: 10px;
  margin: 10px 0px;
`;

export const Box = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${({ bg }) => bg || "#383838"};
  border-radius: 10px;
  align-self: center;
`;

export const List = styled.div`
  width: ${({ width }) => width || "500px"};
  align-self: center;
  padding: 10px;
  background-color: #c21a3f;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 5px;
  margin-top: 5px;
`;

export const ListItems = styled.div`
  padding: 15px;
  border-radius: 5px;
  background-color: #db3458;
  font-size: 1rem;
  margin: 5px 0px;
  font-weight: 200;
`;

export const Header = styled.h1`
  color: red;
  background-color: ${({ bg }) => bg || "black"};
`;
