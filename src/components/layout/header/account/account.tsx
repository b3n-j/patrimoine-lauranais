import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import AppContext from '../../../../app/app-context';
import { OutlinedAccountCircleSVG } from '../../../../assets';
import { getToken } from '../../../../pages/sign-in/sign-in-page';
import styles from './account.module.scss';

const Account: React.FC = () => {
  const isDarkMode = useContext(AppContext).settings.isDarkMode;
  const { t } = useTranslation("translation", {keyPrefix: "header.account"})
  /* To replace by authentification hook */
  const isLogged = getToken();

  const userConnected = () => {
    return (
      <ReactSVG
        src={OutlinedAccountCircleSVG}
        className={styles.userConnectedIcon}
      />
    )
  }

  const userDisconnected = () => {
    return (
      <ReactSVG
        src={OutlinedAccountCircleSVG}
        className={styles.userDisconnectedIcon}
      />
    )
  }

  const AccountMenuItem: React.FC<{label?: string, icon?: string, route: string}> = ({label, icon, route}) => {
    return (
      <li
        key={label}
        className={styles.item}
        aria-label={label}
      >
        <Link to={route}>
          {icon &&
            <ReactSVG
              src={icon}
              className={styles.icon}
            />
          }
          <label className={styles.label}>
            {label}
          </label>
        </Link>
      </li>
    )
  }

  return (
    <nav aria-label='Account Navigation' className={isDarkMode ? `${styles.account} ${styles.dark}` : styles.account}>
      <Link to={'/profile'} className={styles.link}>
        {isLogged ? userConnected() : userDisconnected()}
      </Link>
      <ul className={styles.menu}>
        <AccountMenuItem label={t('profile')} route='/profile'/>
        <AccountMenuItem label={t('favorites')} route='/favorites'/>
        <AccountMenuItem label={t('collections')} route='/my-collections'/>
        <AccountMenuItem label={t('settings')} route='/settings'/>
      </ul>
    </nav>
  );
}

export default Account;
