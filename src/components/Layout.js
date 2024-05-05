import React from 'react';
import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
    return (
      <div>
        <header>
          <nav className='nav-link-ct'>
            <ul>
              <li>
                <NavLink to="/">Posts</NavLink>
              </li>
              <li>
                <NavLink to="/author">Author</NavLink>
              </li>
              <li>
                <NavLink to="/category">Category</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
}