import React, { useContext, useState } from 'react';
import AppContext from '../../app/app-context';
import AnimatedLoop from './animated-loop/animated-loop';
import styles from './search-bar.module.scss';

type Props = {
  displaySubmitButton?: boolean,
  placeholder?: string,
}

const SearchBar: React.FC<Props> = ({ placeholder, displaySubmitButton = false }) => {
  const [submitButtonActive, setSubmitButtonActive] = useState(false);
  const isDarkMode = useContext(AppContext).settings.isDarkMode;

  function onSubmit(e: React.InputHTMLAttributes<HTMLInputElement>) {
    console.log("submit form")
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.value) {
      setSubmitButtonActive(true)
    }
    else {
      setSubmitButtonActive(false)
      e.currentTarget.placeholder = placeholder ?? 'Search';
    }
  }

  function onClick(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {
    console.log(e.currentTarget.focus)
    e.currentTarget.placeholder = '';
    return e.target
  }

  return (
    <div
      className={
        displaySubmitButton ?
          (isDarkMode ? `${styles.searchBar} ${styles.dark} ${styles.submitButton}` : `${styles.searchBar} ${styles.submitButton}`) :
          (isDarkMode ? `${styles.searchBar} ${styles.dark}` : styles.searchBar)
      }>
      <form className={styles.form} defaultValue={''} method="get" action="" onSubmit={onSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder ? placeholder : 'Search'}
          onChange={onChange}
          onClick={onClick}
          required>
        </input>
        {displaySubmitButton && <AnimatedLoop isActive={submitButtonActive} />}
      </form>
    </div>
  );
}

export default SearchBar;
