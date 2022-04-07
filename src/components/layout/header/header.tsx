import React, { useContext } from 'react';
import styles from './header.module.scss';
import { DeviceType } from '../../../hooks';
import SideBar from './side-bar/side-bar';
import Burger from './burger/burger';
import NavBar from './navbar/navbar';
import { SearchBar } from '../..';
import { useTranslation } from 'react-i18next';
import Account from './account/account';
import Brand from './brand/brand';
import AppContext from '../../../app/app-context';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const context = useContext(AppContext);

  return (
    <header className={context.settings.isDarkMode ? `${styles.header} ${styles.dark}` : styles.header}>
      <Brand />
      <div className={styles.explore}>
        <SearchBar
          placeholder={t('header.searchBarPlaceholder')}
          displaySubmitButton={true}
        />
        {context.settings.deviceType === DeviceType.Desktop && <NavBar />}
      </div>
      <div className={styles.tools}>
        {context.settings.deviceType === DeviceType.Desktop && <SideBar />}
        {context.settings.deviceType === DeviceType.Desktop && <Account />}
        {context.settings.deviceType !== DeviceType.Desktop && <Burger />}
      </div>
    </header>
  );
}

export default Header;
