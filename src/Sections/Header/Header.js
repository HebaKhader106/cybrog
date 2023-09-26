import {Link } from 'react-router-dom';
import React from "react";

import './Header.css';
import logo from '../../assets/images/logo.png';
import Navitem from "../../Copmonents/Navitem/Navitem";


const Header = () => {
  const id = 1;
  // const navigate = useNavigate();
  // const logouthandler = ()=>{
  //   navigate('/');
  // }
 return ( 
 <div className="navbar navbar-expand-md cybrog-navbar navbar-dark">
  <div className="container">
   <Link to="/" className="navbar-brand">
    <img src={logo} alt="xx"/>
    </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
      <span className="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse" id="mainmenu">
    <ul className="navbar-nav ms-auto">
      <Navitem>
     <Link to="/" className="nav-link">Home</Link>
      </Navitem>
      
      <Navitem>
      <Link to="/#" className="nav-link">Browse</Link>     
       </Navitem>

       <Navitem>
      <Link to="/#" className="nav-link ">Details</Link>
      </Navitem>
      <Navitem>
       <Link to="/#" className="nav-link">Streams</Link>   
      </Navitem>

      <Navitem>
       <Link to={`${id}/profile`} className="nav-link">Profile</Link>    
      </Navitem>
    

     </ul>
    </div>
</div>
 </div>
  );
}
 
export default Header;