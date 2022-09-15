import React from 'react';
import { FormSearch } from '../FormSearch.js/FormSearch';
import { HamburgerMenu } from '../HamburgerMenu/HamburgerMenu';
import { LogoLN } from '../LogoLN/LogoLN';
import './Header.css';

export const Header = () => {
  return (
    <header className='header'>
      <nav className='lay'>
        <div className='row'>
          <div className="col-4 header__left">
            <HamburgerMenu />
            <FormSearch />
          </div>
          <div className='col-4 header__middle'>
            <LogoLN />
          </div>
          <div className='col-4 header__right'>
            <div className='com-usuario'>
              <button className='--btn --highlight hlp-marginRight-35'>Suscribite</button>
              <button className='--btn --secondary'>Ingresar</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
