import React from 'react';
import styles from './Header.module.css';
import { Route } from 'react-router-dom';
import { MdNightlight } from 'react-icons/md';
import { FiSearch } from 'react-icons/fi';
import {BsSunFill} from 'react-icons/bs';
import Search from './Search.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Header() {
  const [dark,setDark]=useState(true);
  function turnBack(){//다크모드
    setDark(dark=>!dark)
    if (dark==true) {
      document.querySelector(".App").style.backgroundColor="#121212";
    } else {
      document.querySelector(".App").style.backgroundColor="#F8F9FA"; 
    }
  }
  return (
    <div>
      <div className={styles.header}>
        <Link to="/" className={styles.home}>velog</Link>
        <div className={styles.rightMenu}>
        
          {dark == true
          ?<div className={styles.icon} onClick={turnBack}><BsSunFill /></div>
          :<div className={styles.icon} onClick={turnBack}><MdNightlight /></div>
          }
          <Link to="/search" className={styles.icon}>
            <FiSearch />
          </Link>
          <div className={styles.loginBtn}>로그인</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
