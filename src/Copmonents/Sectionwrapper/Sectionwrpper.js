import React from "react";
import './Sectionwrapper.css';

const Sectionwrapper = (props) => {
    return ( <div className="section-wrapper">{props.children}</div> );
}
 
export default Sectionwrapper;