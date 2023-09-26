import React from "react";
import './Gaminglibrery.css';
import { Sectionheader, Sectionwrapper ,Gaminglibrerycard } from "../../Copmonents/index";

import Gaminglibrerydata from "../../Data/Gaminglidrerydata";

const Gaminglibrery = () => {
    const Cards = Gaminglibrerydata.map(card=>{
        return  <Gaminglibrerycard key={card.id} image={card.image} title={card.title} category={card.category} date_added={card.date_added} hours_played={card.hours_played} downloaded={card.downloded}/>
    
      });
    return ( 
        <Sectionwrapper>
         <Sectionheader>Your Gaming</Sectionheader>
         <div className="gaming-librery-cards">
        {Cards}
       </div>
         </Sectionwrapper>


     );
}
 
export default Gaminglibrery;