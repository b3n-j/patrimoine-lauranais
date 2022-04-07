import React from 'react';
import { useTranslation } from 'react-i18next';
import { DeviceType } from '../../hooks/use-device-type';
import styles from './profile-page.module.scss'

const ProfilePage: React.FC = () => {
  const { t } = useTranslation("translation", {keyPrefix: "profile"})

  return (
    <div className={styles.profile}>
      <h1>{t('title')}</h1>
    </div>
  );
}

export default ProfilePage;
