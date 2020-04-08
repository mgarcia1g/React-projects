import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => (
    <nav className="side-drawer">
        <ul>
            <li> <a href="/"> Programs </a></li>
            <li> <a href="/"> Macro Calculator </a></li>
            <li> <a href="/"> About us </a></li>
        </ul>
    </nav>
);
export default sideDrawer;