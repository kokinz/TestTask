import React from 'react';
import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';

function Header() {

  return (
    <header className='header'>
      <nav>
        <ul className="header__nav list">
          <li>
            <Link className='link' to={AppRoute.PRODUCTS}>Products</Link>
          </li>

          <li>
            <Link className='link' to={AppRoute.CREATE}>Create Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
