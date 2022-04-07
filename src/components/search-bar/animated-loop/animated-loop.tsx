import React, { useContext } from 'react';
import AppContext from '../../../app/app-context';
import styles from './animated-loop.module.scss';

type Props = {
  isActive: boolean
}

const AnimatedLoop: React.FC<Props> = ({ isActive }) => {
  const isDarkMode = useContext(AppContext).settings.isDarkMode;

  return (
    <button
      className={
        isActive ?
          (isDarkMode ? `${styles.animatedLoop} ${styles.toArrow} ${styles.dark}` : `${styles.animatedLoop} ${styles.toArrow}`) :
          (isDarkMode ? `${styles.animatedLoop} ${styles.dark}` : styles.animatedLoop)
      }
      type="submit">
      <div className={styles.circle}></div>
      <span className={styles.bar}></span>
    </button>
  );
}

export default AnimatedLoop;
