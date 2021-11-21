import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  display: flex;
`;

export const NavList = styled.div`
  background-color: #b92d44;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const NavItem = styled(Link)`
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  background-color: #e43754;
  cursor: pointer;
  color: black;
  text-decoration: none;
  width: 200px;
  text-align: center;
  &:hover {
    transform: scale(1.03);
  }
`;
