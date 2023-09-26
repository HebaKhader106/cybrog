import React from "react";
import './Gaminglibrerycard.css';
import { SecondryButton } from "..";

const Gaminglibrerycard = (props) => {
    return ( 
        <div className="gaming-librery-card">
          <ul>
          <li><img src={props.image} alt="xx"/></li>
          <li><h4>{props.title}</h4><span>{props.category}</span></li>
          <li><h4>Date Adeede</h4><span>{props.date_added}</span></li>
          <li><h4>Hours Played</h4><span>{props.hours_played}</span></li>
          <li><h4>Curently</h4><span>{props.downloded}</span></li>
         <SecondryButton>Downlod</SecondryButton>
          </ul>
        </div> 
        );
}
 
export default Gaminglibrerycard;