import React from 'react';
import AboutUs from './about-us/about-us';
import styles from './footer.module.scss';
import LanguageSelector from './language-selector/language-seclector';
import LegalNotices from './legal-notices/legal-notices';
import Newsletter from './newsletter/newsletter';
import Sitemap from './sitemap/sitemap';
import SocialMedia from './social-media/social-media';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.community}>
        <Newsletter />
        <SocialMedia />
      </div>
      <hr className={styles.divider} />
      <div className={styles.website}>
        <AboutUs />
        <Sitemap />
      </div>
      <hr className={styles.divider} />
      <div className={styles.tools}>
        <span className={styles.copyright}>© 2022 <Bullet /> Benjamin Gracia</span>
        <LegalNotices />
        <LanguageSelector />
      </div>
    </footer>
  );
}

export const Bullet = () => <div className={styles.bullet}>{'\u2022'}</div>
export default Footer;