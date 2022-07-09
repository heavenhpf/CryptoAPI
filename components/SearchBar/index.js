import styles from './Search.module.css';
// ES7 react shortcut
// search box
const SearchBar = ({ ...rest }) => {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest} />
    </div>
  );
};

export default SearchBar;
