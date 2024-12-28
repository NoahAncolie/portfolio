import React from 'react'
import { Link } from 'react-router-dom'
import "../../assets/css/menu.css";

const Menu = () => {
    return (
        <div className='menu-layer' id='name'>
            <ul>
                <li>Exposés</li>
                <li><Link to={"/histoire-art"}>Histoire de l'art</Link></li>
            </ul>
        </div>
    )
}

export default Menu