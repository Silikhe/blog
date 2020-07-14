import React from 'react'
import './style.css'
import { FaSearch } from 'react-icons/fa';

export default function Navbar() {
    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About Us</a></li>
               <li><a href='#'>Contact us</a></li>
               <li><a href='#'>Posts</a></li>
            </ul>
            <div className='search'>
                <input type='text' placeholder='Search'/>
                <FaSearch className='icon'/>
            </div>
        </div>
    )
}
