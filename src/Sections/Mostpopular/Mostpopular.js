import React,{Fragment} from "react";
import './Mostpopular.css';

import { Card , Sectionheader ,Sectionwrapper } from "../../Copmonents/index";
import Mostpopulardata from "../../Data/Mostpopulardata";
const  Mostpopular = () => {
  const Cards = Mostpopulardata.map(card=>{
    return  <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>

  });
 
  return ( 
  <Fragment>
  <Sectionwrapper>
  <Sectionheader>Most popular</Sectionheader>
  <div className="most-popular-items">
    {Cards} 
  </div>
 </Sectionwrapper>
  </Fragment> 
 );
}
 
export default Mostpopular ;