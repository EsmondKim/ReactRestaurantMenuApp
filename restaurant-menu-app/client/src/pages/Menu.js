import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Menu, MenuItem } from "../components/Menu";

function MenuPage() {
  const [menu, setMenu] = useState([]);

  const getTheMenu = () => {
    API.getMenu()
      .then((res) => {
        setMenu(res.data);
        console.log("You tried to get the menu, dude.", menu, res);
      })
      //ON 11/17/21, this is the line in question.  res.data is an empty array for some reason.
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTheMenu();
  }, []);

  return (
    <div>
      <h1>I Swear This Is The Menu Page</h1>
      <Menu>
        {console.log("Here's the Menu!", menu)}
        {/* {menu.map((dish) => {
          return (
            <MenuItem
              item={dish.item}
              description={dish.description}
              price={dish.price}
              details={dish.details}
            />
          );
        })} */}
      </Menu>
    </div>
  );
}

export default MenuPage;
