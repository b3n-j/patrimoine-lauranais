import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from 'react-switch';
import AppContext from '../../app/app-context';
import styles from './settings-page.module.scss';

const SettingsPage: React.FC = () => {
  const context = useContext(AppContext);
  const { t } = useTranslation("translation", {keyPrefix: "settings"})

  return (
    <div className={styles.settings}>
      <h1>{t('title')}</h1>
      <Switch
        onChange={context.settings.changeTheme}
        checked={context.settings.isDarkMode}
      />
    </div>
  );
}

export default SettingsPage;