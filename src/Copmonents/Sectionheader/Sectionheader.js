import React from "react";
import './Sectionheader.css';
const Sectionheader = (props) => {
    return ( 
        <div className="section-header">
        <h4>{props.children}</h4>
      </div>
         );
}
 
export default Sectionheader;