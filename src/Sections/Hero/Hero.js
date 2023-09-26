import React from "react";
import './Hero.css';
 import { PrimeryButton } from "../../Copmonents/index";

const Hero = () => {
 return ( 
  <div className="hero-main">
    <div className="hero-text">
    <h6 className="hero-subtitle">Welcom To Cybrog</h6>
    <h4 className="hero-title"><em>Browse </em> Our Popular Games Here</h4>
   
    <PrimeryButton>Browse Now</PrimeryButton>
  { /* <div className="hero-button">
     <a href="browse.html">Browse Now</a>
    </div>*/}
  </div>   
  </div>
     );
}
 
export default Hero;