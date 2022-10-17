import React from "react";
import "./Button.css"

const Button = ({name, description, style}) => {
  return (
    <button style={style}
    >
      <p>{name}</p>
      <p>{description}</p>

          {/* <div >
    {isResponsiveclose ?  <span><FaBars className='hamburger'/></span> 
    : 
    <span><GiCancel className='cancel'/></span>}
    </div>
    <FaUserCircle className='user' onClick={()=>setResponsiveclose(!isResponsiveclose)}/> */}

    </button>
);
};

export default Button;
