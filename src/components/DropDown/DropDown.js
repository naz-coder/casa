import React, { useState } from "react";
import "./DropDown.css";

const Dropdown = () => {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="menu">
      <div onClick={() => setIsMenu(!isMenu)}>Menu</div>
      {isMenu && 
        <ul className="menu_item">
          <li>Accommodation</li>
          <li>Explore Location</li>
          <li>Enlist Properties</li>
        </ul>
      }
    </div>
  );
};

export default Dropdown;
