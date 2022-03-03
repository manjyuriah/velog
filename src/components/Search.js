import styles from './Search.module.css';
import { FiSearch } from 'react-icons/fi';
function Search() {
  return (
    <div>
        <div className={styles.seachBox}>
           <FiSearch className={styles.icon} />
           <input type="text" className={styles.search} 
           placeholder='검색어를 입력하세요' autoFocus>
           </input>
        </div>
    </div>
  );
}

export default Search;