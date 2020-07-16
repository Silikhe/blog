import React, {useState} from 'react'
import './style.css'
import {NavLink} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

export default function Navbar(props) {

    const[search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        alert('searched')
    }

    const openSearch = () => {
        setSearch(true)
    }

    // const searchClass = search ? 'searchInput active':'searchInput';
    const searchClass = 'searchInput'



    return (
        <div className='navbar'>
            <ul className='navbarMenu'>
               <li><NavLink to='/'>Home</NavLink></li>
               <li><NavLink to='/About'>About Us</NavLink></li>
               <li><NavLink to='/ContactUs'>Contact us</NavLink></li>
               <li><NavLink to='/Post'>Posts</NavLink></li>
            </ul>
            <div className='search'>
                <form onSubmit={submitSearch}>
                <input className={searchClass}  type='text' placeholder='Search'/>
                <FaSearch onClick={openSearch} className='icon'/>
                </form>
            </div>
        </div>
    )
}
