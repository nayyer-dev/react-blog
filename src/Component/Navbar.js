import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='App'>


<nav class="navbar container navbar-expand-lg navbar-light bg-light">
      <Link className='link' to='/login'>Login</Link>
      <Link className='link ms-5' to='/registers'>Registers</Link>
      <Link className='link ms-5' to='/users'>Users</Link>
</nav>
    </div>
  )
}

export default Navbar;