import React from 'react'
import {Link}from 'react-router-dom'

const Navbar = ({title='Github Finder',icon='fab fa-github'})=> {
        return (
          <nav className="navbar bg-primary">
                <Link exact='true' to="/"><h1>
                  <i className={icon}/> {title}</h1></Link>
                  <ul>
                    <li>
                      <Link exact='true' to='/'>Home</Link>
                    </li>
                    <li>
                      <Link  to='/About'>About</Link>
                    </li>
                  </ul>
            </nav>
        )
      }

export default Navbar
