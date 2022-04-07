import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './about-us.module.scss';

const AboutUs: React.FC = () => {
  const { t } = useTranslation("translation", {keyPrefix: "footer.aboutUs"})

  return (
    <div className={styles.aboutUs}>
      {/* <div className={styles.logo}>
        <img src={myTemplateLogo} alt='logo' aria-label='logo'/>
      </div> */}
      <h3 className={styles.brand}>myTemplate</h3>
      <p className={styles.paragraph}>{t('paragraph')}</p>
    </div>
  );
}

export default AboutUs;
