import React , {Fragment} from "react";
import './App.css';
import {  Route , Routes } from "react-router-dom";
import { Container } from "./Copmonents/index";
import {Header ,  Footer  }from "./Sections/index";
import {Home} from './pages/index';
import Profile from "./pages/Profile/Profile";




const App = () => {
 return ( 
  <Fragment>
    <Header/>
    <Container> 
   
      <Routes>
       <Route  path="/" element={ <Home/>}/>
       <Route  path=":id/profile" element={ <Profile/>}/>
    
      </Routes>

   </Container>
  <Footer/>
 </Fragment>
 )
}
 
export default App;