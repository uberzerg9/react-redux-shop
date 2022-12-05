import React from 'react'
import {Link} from 'react-router-dom';

export function Navbar(props) {
  return (
    <nav className="navbar">
        <Link to="/">
            <h2>Shop Title</h2>
        </Link>
        <Link to="/cart">
            <div className="navbar__bag">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-bag-fill" viewBox="0">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
                </svg>
                <span className="bag-quantity">
                    <span>0</span>
                </span>
            </div>
        </Link>
    </nav>
  )
}
