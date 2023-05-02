import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
  
      <Nav>
        <div className="container-logo">
          <i className="fa-solid fa-bars App-burger fa-2xl"></i>
          <img className="App-logo" src="./logo-chef.jpg" alt="logo-chef"/>
        </div>
        <NavMenu>
          <div className="espaceur">
          </div>
          <NavLink to="/about" activeStyle>
            Accueil
          </NavLink>     
          <NavLink to="/Recettes" activeStyle>
            Recettes
          </NavLink>
             <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;