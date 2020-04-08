import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navbar.css';

  const Navbar = props => (
    <header className="navbar">

        <nav className="navbar_navagation"> 
          <div>
            <DrawerToggleButton click={props.drawerClickHandler}></DrawerToggleButton>
          </div>
          <div className="navbar_logo"> <a href="/"> The Logo </a> </div>
          <div className="spacer"/>
          <div className="navbar_items">

              <ul>
                  <li><a href="/">Programs</a></li>
                  <li><a href="/">Macro Calculator</a></li>
                  <li><a href="/">About us</a></li>
              </ul>

          </div>
        </nav>

    </header>
  );


export default Navbar;