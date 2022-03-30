import IconButton from "@mui/material/IconButton";
import React from "react";
import Vector from '../../../images/Vector.svg'

interface IIconLogo {
  className?: string;
  
}
const IconButtonComponent= (props: IIconLogo) => {
  return (
    <img src={Vector} alt="Icon" className={props.className}/>
  )
};

export default IconButtonComponent;
