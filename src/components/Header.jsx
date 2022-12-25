import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { tableContext } from "./TableContext";

function Header() {
  let { favorite, setFavorite } = useContext(tableContext);

  return (
    <>
      <header>
        <h1>
          <NavLink to={"/"}>F1 Driver</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/table"}>Table</NavLink>
          </li>
          <li>
            <NavLink to={"/wishlist"}>
              Wishlist &nbsp; {favorite.length}
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
