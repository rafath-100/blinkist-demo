import React from 'react'

const Logos=(props:any) =>{
  return (
    <div data-testid="custom-element">
        <img src={props.image} alt="not found" />
    </div>
  )
} 
export default Logos