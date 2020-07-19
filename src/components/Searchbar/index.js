import React from 'react'
import './style.css'
import Card from '../UI/Card'
import { FaSearch } from 'react-icons/fa';

/**
* @author
* @function Searchbar
**/

const Searchbar = (props) => {
  const onSearch = (e) => {
    e.preventDefault();
    alert("searched")
  }
  return (
    <div>
      <Card style={{ marginBottom: '20px' }}>
        <div className='cardHeader'>
        </div>
        <div className='search'>
          <form >
            <input type='text' placeholder='Search...' />
            <div className='iconContainer'>
              <FaSearch onClick={onSearch} className='icon' />
            </div>

          </form>
        </div>

      </Card>
    </div>
  )

}

export default Searchbar