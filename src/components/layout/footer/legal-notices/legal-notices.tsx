import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Bullet } from '../footer';
import styles from './legal-notices.module.scss';

type Props = {}

const LegalNotices: React.FC<Props> = ({ }) => {
  const { t } = useTranslation("translation", { keyPrefix: "footer.legalNotices" });

  return (
    <ul className={styles.links}>
      <li className={styles.link}>
        <Link to='/privacy-policy'>
          {t('privacyPolicy')}
        </Link>
      </li>
      <Bullet/>
      <li className={styles.link}>
        <Link to='/terms-of-service'>
          {t('termsOfService')}
        </Link>
      </li>
      <Bullet/>
    </ul>
  );
}

export default LegalNotices;