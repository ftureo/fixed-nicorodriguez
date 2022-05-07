import React from "react";
import "./NavBar.css";
import Button from "@mui/material/Button";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav>
      <div>
        <img
          className="logoContainer"
          src={process.env.PUBLIC_URL + "assets/logo.png"}
          alt="logo"
        />
      </div>
      <ul className="ulNavBar">
        <li>
          <Button variant="contained">HOME</Button>
        </li>
        <li>
          <Button variant="contained">Productos</Button>
        </li>
        <li>
          <Button variant="contained">Nosotros</Button>
        </li>
        <li>
          <Button variant="contained">Contacto</Button>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
