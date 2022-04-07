import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './sitemap.module.scss';

type Props = {}

const Sitemap: React.FC<Props> = ({ }) => {
  const { t } = useTranslation("translation", {keyPrefix: "footer.sitemap"})

  const PageLink: React.FC<{ label: string, slug: string }> = ({ label, slug }) => {
    return <li className={styles.link}><Link to={slug}>{label}</Link></li>
  }

  return (
    <div className={styles.sitemap}>
      <ul className={styles.column}>
        <PageLink label={t('columnOne.title')} slug='/marketplace' />
        <PageLink label={t('columnOne.new')} slug='/explore/new' />
        <PageLink label={t('columnOne.art')} slug='/explore/art'/>
        <PageLink label={t('columnOne.collectibles')} slug='/explore/collectibles' />
        <PageLink label={t('columnOne.domainNames')} slug='/explore/domain-names' />
        <PageLink label={t('columnOne.music')} slug='/explore/music' />
        <PageLink label={t('columnOne.photography')} slug='/explore/photography' />
        <PageLink label={t('columnOne.sports')} slug='/explore/sports' />
        <PageLink label={t('columnOne.tradingCards')} slug='/explore/tradingCards' />
        <PageLink label={t('columnOne.utility')} slug='/explore/utility' />
        <PageLink label={t('columnOne.virtualWorlds')} slug='/explore/virtualWorlds' />
      </ul>
      <ul className={styles.column}>
        <PageLink label={t('columnTwo.title')} slug='/profile' />
        <PageLink label={t('columnTwo.profile')} slug='/profile' />
        <PageLink label={t('columnTwo.collections')} slug='/profile/collections' />
        <PageLink label={t('columnTwo.favorites')} slug='/favorites' />
        <PageLink label={t('columnTwo.settings')} slug='/settings' />
      </ul>
      <ul className={styles.column}>
        <PageLink label={t('columnThree.title')} slug='/resources' />
        <PageLink label={t('columnThree.helpCenter')} slug='/help-center' />
        <PageLink label={t('columnThree.platformStatus')} slug='/status' />
        <PageLink label={t('columnThree.partners')} slug='/partners' />
        <PageLink label={t('columnThree.blog')} slug='/blog' />
        <PageLink label={t('columnThree.documents')} slug='/documents' />
        <PageLink label={t('columnThree.newsletter')} slug='/newsletter' />
      </ul>
      <ul className={styles.column}>
        <PageLink label={t('columnFour.title')} slug='/about-us' />
        <PageLink label={t('columnFour.about')} slug='/about-us' />
        <PageLink label={t('columnFour.careers')} slug='/careers' />
      </ul>
    </div>
  );
}

export default Sitemap;