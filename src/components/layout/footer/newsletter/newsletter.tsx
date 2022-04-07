import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, SearchBar } from '../../..';
import styles from './newsletter.module.scss';

type Props = {}

const Newsletter: React.FC<Props> = ({ }) => {
  const { t } = useTranslation("translation", {keyPrefix: "footer.newsletter"});

  return (
    <div className={styles.newsletter}>
      <h3 className={styles.title}>{t('title')}</h3>
      <p className={styles.paragraph}>{t('paragraph')}</p>
      <div className={styles.form}>
        <div className={styles.searchBar}>
          <SearchBar placeholder={t('searchBarPlaceholder')}/>
        </div>
          <Button label={t('buttonLabel')}/>
      </div>
    </div>
  );
}

export default Newsletter;
