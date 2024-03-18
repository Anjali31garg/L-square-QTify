import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import styles from './Navbar.module.css';
// import logo from '../../assests/logo.png';
import Button from '../Button/Button';

const Navbar = () =>{

    return (
        <>
        <nav className={styles.myNav}>
            <Logo/>
            <Search />
            <Button text="Give Feedback"/>
        </nav>
     
        </>
    )
}

export default Navbar;