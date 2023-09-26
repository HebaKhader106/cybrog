import React from "react";
import './Button.css';

const PrimeryButton = (props) => {
    return (  
        <div className='button primary-btn'>
        <a href="/#">{props.children}</a>
       </div>
    );
}
const SecondryButton = (props) => {
    return (  
        <div className='button secondary-btn'>      
          <a href="/#">{props.children}</a>
        </div>
    );
}
 
export default PrimeryButton;
export {SecondryButton};
  

