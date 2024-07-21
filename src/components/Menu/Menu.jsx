import React from 'react';
import { ReactSVG } from 'react-svg';

function Menu() {
    const menuItems = [
        { 
            name: 'Home',
            link: '/' ,
            image: './src/assets/svg/house.svg',
        },
        { 
            name: 'Calc',
            link: '/calculator',
            image: './src/assets/svg/calculator.svg'
        },
        { 
            name: 'History',
            link: '/history',
            image: './src/assets/svg/history.svg'
        }
    ];

    const menu = menuItems.map((item, index) =>
        <li key={index} className="menuItem">
            <a href={item.link}><ReactSVG src={item.image} className="svgIcon"/></a>
        </li>
    );

    return (
        <nav className="menuNav">
            <ul>
                {menu}
            </ul>
        </nav>
    );
}

export default Menu;
