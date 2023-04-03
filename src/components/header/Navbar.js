import React from 'react'
import { Link } from 'react-router-dom'

const Header= () => {
  return (
    <div>
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <Link class="navbar-brand" to="/">VedX</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ">
    
      <li class="nav-item">
        <Link class="nav-link" to='about'>About</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='login'>Login</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='SignUp'>SignUp</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='Datatable'>DataTable</Link>
     </li>
      <li class="nav-item">
      <Link class="nav-link" to='Contact'>Contact</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='Help'>Help</Link>
      </li>
    </ul>
  </div>
</nav>
      </div>
    </div>
  )
}

export default Header
