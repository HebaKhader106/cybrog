import React, { Fragment } from "react";
import './Home.css';
import { Hero , Mostpopular, Gaminglibrery  }from "../../Sections/index";


const Home = () => {
 return (  
 <Fragment>
  <Hero/>
  <Mostpopular/>
  <Gaminglibrery/>
 </Fragment>
    );
}
 
export default Home;