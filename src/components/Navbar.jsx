import { NavLink } from "react-router-dom";
import styles from '../styles/navbar.module.css';
import { useState } from "react";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen]= useState(false);

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen)
    }

    return(
        <nav className={`${styles.navbar} ${isMenuOpen ? styles.navbares : ''} `}>
            <button className={styles.abrirMenu} onClick={toggleMenu}><i className="bi bi-list"></i></button>
           
            <ul className={ `${styles.menu} ${isMenuOpen ? styles.open : ''}` }>
                <li>
                    <NavLink 
                        to="/"
                        className={
                            ({isActive})=>
                                isActive ? `${styles['link--active1']}`: `${styles['a--link1'] }`  
                        }
                        >
                        Login
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                            to="/SignUp"
                            className={
                                ({isActive})=>
                                    isActive ? `${styles['link--active2']}` : `${styles['a--link2']}`
                            }
                            >
                        Signup
                    </NavLink>
                </li>
            </ul>

        </nav>
      
    )
  
}

export default Navbar;
