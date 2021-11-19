import React from "react";
// import "./style.css";

export function Menu({ children }) {
  return <ul>{children}</ul>;
}

export function MenuItem({ item, description, price, details }) {
  return (
    <MenuItem>
      <li>
        <h1>{item}</h1>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>{details}</p>
      </li>
    </MenuItem>
  );
}
