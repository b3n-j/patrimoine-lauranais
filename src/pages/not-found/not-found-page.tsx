import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './not-found-page.module.scss';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation("translation", {keyPrefix: "notFound"})

  return (
    <div className={styles.notFound}>
      <h1>{t('title')}</h1>
    </div>
  );
}

export default NotFoundPage;
