import React from 'react'
import {Link} from 'react-router-dom'


const Nav = ()=> { 
    return  (
      <div  >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div className="container">
                <Link className="navbar-brand js-scroll-trigger" to="/">AHMED ELHOR</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link js-scroll-trigger" to="/resume">Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
      </div>
    )
}

export default Nav; 
 