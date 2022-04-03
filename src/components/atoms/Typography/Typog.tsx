// import React, { ReactNode } from 'react'
// import Typography, { TypographyProps } from '@mui/material/Typography';

// export interface ItypographyProps extends TypographyProps {
//   children:ReactNode;
  
// }

// export const Typog=({children, ...props}:ItypographyProps ) =>{
//   return (
//     <div>
//         <Typography        
//         color="textSecondary"     
//         gutterBottom
//       >
//         {children}
//       </Typography>
//     </div>
//   )
// }

import Typography from "@mui/material/Typography";

export interface ItypographyProps {
  children: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
  className?: string;
  onClick?: () => void;
  color?:string;
  textSize?:string;
}

const Typog = (props: ItypographyProps) => {
  return (
    <>
      <Typography
        variant={props.variant}
        className={props.className}
        onClick={props.onClick}
        color={props.color}
        
        //textSize={props.textSize}
      >
        {props.children}
      </Typography>
    </>
  );
};

export default Typog;

