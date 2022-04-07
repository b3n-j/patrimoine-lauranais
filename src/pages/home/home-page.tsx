import React, { useContext } from 'react';
import styles from 'pages/home/home-page.module.scss';
import { DeviceType } from '../../hooks/use-device-type';
import { useTranslation } from 'react-i18next';
import { Button } from '../../components';
import { ButtonType } from '../../components/button/button';
import Particles from "react-tsparticles";
import Card from '../../components/card/card';
import AppContext from '../../app/app-context';
import { useHistory } from 'react-router-dom';

type Props = {
  deviceType: DeviceType
}

const HomePage: React.FC<Props> = ({ deviceType }) => {
  const context = useContext(AppContext);
  const { t } = useTranslation("translation", {keyPrefix: "home"})
  const particlesConfig = {
    fpsLimit: 100,
    backgroundMode: false,
    particles: {
      color: {
        value: context.settings.isDarkMode ? "#FFFFFF" : "#000",
      },
      links: {
        enable: true,
        color: context.settings.isDarkMode ? "#FFFFFF" : "#000",
        opacity: 0.1,
        distance: 300,
      },
      move: {
        enable: true,
        speed: 0.8,
      },
      number: {
        density: {
          enable: false,
          area: 800,
        },
        value: 50,
      },
    }
  }

  return (
    <div className={styles.home}>
      <section id="welcome" className={styles.welcome}>
        <Particles className={styles.particles} options={particlesConfig} />
        <div className={styles.content}>
          <div className={styles.description}>
            <h1 className={styles.title}>
              {t('welcome.title')}
            </h1>
            <h2 className={styles.subtitle}>
              {t('welcome.subtitle')}
            </h2>
            <div className={styles.buttons}>
              <Button 
                label={t('welcome.firstActionButtonLabel')} 
                slug="/explore"
              />
              <Button 
                label={t('welcome.secondActionButtonLabel')}
                slug="/create"
                type={ButtonType.OUTLINED}
              />
            </div>
          </div>
          <div className={styles.nft}>
            <Card width='480px' height='380px' />
          </div>
        </div>
      </section>
      <section id="typography" className={styles.typography}>
        <h1>Test H1</h1>
        <h2>Test H2</h2>
        <h3>Test H3</h3>
        <h4>Test H4</h4>
        <h5>Test H5</h5>
        <p>Paragraph</p>
        <label>Label</label>
      </section>
    </div>
  );
}

export default HomePage;
