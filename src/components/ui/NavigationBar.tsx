import React, { useState } from 'react';

import './../../styles/navigationbar.css';

const NavigationBar = (): JSX.Element => {
    // adding the states 
  const [isActive, setIsActive] = useState(false);
  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

    return (
        <header>
            <div>
                <img src={`/navigationbar/dulcemania-banner.png`} alt={"Dulcemania Store"} />
            </div>
            <nav className='navbar'>
                {/* logo */}
                <a href='/' className='logo'>Dev. </a>
                <ul className={`navMenu ${isActive ? 'active' : ''}`}>
                    <li onClick={removeActive}>
                        <a href='/' title='Home' className='navLink'>家</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/aboutus' className='navLink'>About Us</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/store' className='navLink'>Store</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/blog' className='navLink'>Blog</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/gallery' className='navLink'>Gallery</a>
                    </li>
                    <li onClick={removeActive}>
                        <a href='/contact' className='navLink'>Contact</a>
                    </li>
                </ul>
                <div className={`hamburger ${isActive ? 'active' : ''}`}  onClick={toggleActiveClass}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    );
}

export default NavigationBar;