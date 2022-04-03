import React from 'react'

// interface IIProps {
//   children: string;
//   type: string;
//   className: string;
//   style?: React.CSSProperties;
//    onClick?: () => void;

// }

const Logos=(props:any) =>{
  return (
    <div>
        <img src={props.image} alt="not found" />
    </div>
  )
} 
export default Logos