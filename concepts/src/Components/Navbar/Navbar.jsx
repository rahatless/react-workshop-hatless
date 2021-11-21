import React from "react";
import { Wrapper, NavList, NavItem } from "./style";
function Navbar() {
  return (
    <Wrapper>
      <NavList>
        <NavItem to="/useState">useState</NavItem>
        <NavItem to="/useReducer">useReducer</NavItem>
        <NavItem to="/useEffect">useEffect</NavItem>
        <NavItem to="/lifecycle">Lifecycle</NavItem>
        <NavItem to="/useMemo">useMemo</NavItem>
        <NavItem to="/useCallback">useCallback</NavItem>
      </NavList>
    </Wrapper>
  );
}

export default Navbar;
