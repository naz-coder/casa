import React, { useState } from "react";
import "./MobileMenu.css"
import MenuIcon from '@mui/icons-material/Menu';


const MobileMenu = () => {
    const [menu, setMenu] = useState (false);
  return (
    <div className="mobilemenu">
      <div onClick={() => setMenu(!menu)}><MenuIcon className='menu_icon'/></div>
      {menu && 
        <ul className="menu_list">
          <li>Accommodation</li>
          <li>Explore locations</li>
          <li>Enlist property</li>
        </ul>
      }
    </div>
  );
};

export default MobileMenu;
