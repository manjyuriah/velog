import styles from './Nav.module.css';
import {FiTrendingUp} from 'react-icons/fi';
import {AiOutlineClockCircle} from 'react-icons/ai';
import { useState } from 'react';
import { IoMdMore } from 'react-icons/io';
import Update from './Update';

function Nav({activeMenu}) {
  const [select,setSelect]=useState(true)
  const [more,setMore]=useState(true)
  const [trending,setTrending]=useState(true)
  function selectOn(){
    setSelect(select=>!select)
  }
  function selectLi(selected){
    
  }
  function moreOn(){
    setMore(more=>!more)
  }
  function trendingOn(){
    setTrending(trending=>!trending)
    console.log(trending);
  }
  return (
    <div className={styles.nav} activeMenu={activeMenu}>
      <div className={styles.leftMenu}>
        
        <div onClick={trendingOn}><FiTrendingUp className={styles.icon}/> 트렌딩</div>
        <div onClick={trendingOn}>
          <AiOutlineClockCircle className={styles.icon}/> 최신
          {/* <Update /> */}
        </div>

        {/* <div><AiOutlineClockCircle className={styles.icon} /> 최신</div> */}
        <div className={styles.selectBox} onClick={selectOn}>
          <div>이번 주</div>
          <div className={styles.downArrow}>▼</div>
          {select == true
          ?null
          :<div>
            <ul  className={styles.selectUl}>
              <li className={styles.selectLi} onClick={selectLi('오늘')}>오늘</li>
              <li className={styles.selectLi} onClick={selectLi('이번 주')}>이번 주</li>
              <li className={styles.selectLi} onClick={selectLi('이번 달')}>이번 달</li>
              <li className={styles.selectLi} onClick={selectLi('올해')}>올해</li>
            </ul>
          </div>
          }

        </div>
      </div>
      <div className={styles.more}>
        <IoMdMore onClick={moreOn} className={styles.moreIcon}/>
        {
          more == true
          ?null
          :<div className={styles.moreBox}>
          <ul  className={styles.moreUl}>
            <li className={styles.moreLi}>공지사항</li>
            <li className={styles.moreLi}>태그 목록</li>
            <li className={styles.moreLi}>서비스 정책</li>
            <li className={styles.moreLi}>Slack</li>
          </ul>
          <div className={styles.contact}>
            <h5>문의</h5>
            <div className={styles.email}>manjyuriah01@gmail.com</div>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default Nav;