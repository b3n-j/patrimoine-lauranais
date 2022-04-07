import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import AppContext from '../../../../app/app-context';
import { WalletSVG } from '../../../../assets';
import styles from './side-bar.module.scss';

const SideBar: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isOpened) document.body.style.overflow = "hidden";
    else if (!isOpened) document.body.style.overflow = "unset"
  }, [isOpened]);

  return (
    <nav 
      aria-label='Side Bar Navigation'
      className={styles.sideBar}
    >
      <button
        className={styles.sideBarButton}
        onClick={() => setIsOpened(!isOpened)}
      >
        <ReactSVG
          src={WalletSVG}
          className={styles.icon}
        />
      </button>
      <div
        className={isOpened ? `${styles.sideBarMenu} ${styles.opened}` : `${styles.sideBarMenu}`}
      >
        <div className={styles.overlay} onClick={() => setIsOpened(false)}></div>
        <div className={styles.content}></div>
      </div>
    </nav>
  );
}

export default SideBar;
