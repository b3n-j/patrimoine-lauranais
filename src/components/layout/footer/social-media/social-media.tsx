import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';
import AppContext from '../../../../app/app-context';
import { DiscordIconSVG, FacebookIconSVG, InstagramIconSVG, RedditIconSVG, TwitterIconSVG } from '../../../../assets';
import styles from './social-media.module.scss';

type Props = {}

const SocialMedia: React.FC<Props> = ({ }) => {
  const { t } = useTranslation("translation", {keyPrefix: "footer.socialMedia"})
  const context = useContext(AppContext);

  const SocialMediaIcon: React.FC<{ name: string, link: string, icon: string }> = ({ name, link, icon }) => {
    return (
      <li className={context.settings.isDarkMode ? `${styles.socialMediaIcon} ${styles.dark}` : styles.socialMediaIcon}>
        <a
          className={styles.link}
          aria-label={name}
          target='_blank'
          href={link}
        >
          <ReactSVG
            src={icon}
            className={styles.icon}
          />
        </a>
      </li>
    )
  }

  return (
    <div className={styles.socialMedia}>
      <h3 className={styles.title}>
        {t('title')}
      </h3>
      <ul className={styles.list}>
        <SocialMediaIcon name='facebook' link='https://www.facebook.com/' icon={FacebookIconSVG} />
        <SocialMediaIcon name='twitter' link='https://www.facebook.com/' icon={TwitterIconSVG} />
        <SocialMediaIcon name='instagram' link='https://www.facebook.com/' icon={InstagramIconSVG} />
        <SocialMediaIcon name='discord' link='https://www.facebook.com/' icon={DiscordIconSVG} />
        <SocialMediaIcon name='reddit' link='https://www.facebook.com/' icon={RedditIconSVG} />
      </ul>
    </div>
  );
}

export default SocialMedia;
