import React, {useState} from 'react'
import './style.css'
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
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About Us</a></li>
               <li><a href='#'>Contact us</a></li>
               <li><a href='#'>Posts</a></li>
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
