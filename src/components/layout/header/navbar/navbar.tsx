import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { OutlinedAccountCircleSVG, WalletSVG } from '../../../../assets';
import DropdownButton from './dropdown-button/dropdown-button';
import styles from './navbar.module.scss';

type Props = {}

const NavBar: React.FC<Props> = ({ }) => {
  const { pathname } = useLocation();
  const [selectedDropdownButton, setSelectedDropdownButton] = useState('');
  const { t } = useTranslation('translation', { keyPrefix: 'header.navbar' });

  useEffect(() => {
    switch (pathname) {
      case '/':
      case '/profile':
      case '/not-found':
        setSelectedDropdownButton('');
    }
  })

  return (
    <nav aria-label='Header Navigation' className={styles.navbar}>
      <ul className={styles.buttons}>
        <DropdownButton
          id='dropdown-button-1'
          label={t('dropdownButtonOne.label')}
          route='/explore'
          isSelected={selectedDropdownButton === "dropdown-button-1"}
          onClick={(dropdownButtonId) => setSelectedDropdownButton(dropdownButtonId)}
          menu={[
            { label: t('dropdownButtonOne.submenu.art'), route: '/explore/art', icon: WalletSVG },
            { label: t('dropdownButtonOne.submenu.collectibles'), route: '/explore/collectibles', icon: WalletSVG },
            { label: t('dropdownButtonOne.submenu.domainNames'), route: '/explore/domain-names' },
            { label: t('dropdownButtonOne.submenu.music'), route: '/explore/music', icon: OutlinedAccountCircleSVG },
            { label: t('dropdownButtonOne.submenu.photography'), route: '/explore/photography' },
            { label: t('dropdownButtonOne.submenu.sports'), route: '/explore/domain-names' },
            { label: t('dropdownButtonOne.submenu.tradingCards'), route: '/explore/trading-cards' },
            { label: t('dropdownButtonOne.submenu.utility'), route: '/explore/utility' },
            { label: t('dropdownButtonOne.submenu.virtualWorlds'), route: '/explore/virtual-worlds' }
          ]}
        />
        <DropdownButton
          id='dropdown-button-2'
          label={t('dropdownButtonTwo.label')}
          route='/stats'
          isSelected={selectedDropdownButton === "dropdown-button-2"}
          menu={[
            { label: t('dropdownButtonTwo.submenu.ranking'), route: '/ranking' },
            { label: t('dropdownButtonTwo.submenu.activity'), route: '/activity'}
          ]}
          onClick={(dropdownButtonId) => setSelectedDropdownButton(dropdownButtonId)}
        />
        <DropdownButton
          id='dropdown-button-3'
          label={t('dropdownButtonThree.label')}
          route='/resources'
          isSelected={selectedDropdownButton === "dropdown-button-3"}
          menu={[
            { label: t('dropdownButtonThree.submenu.helpCenter'), route: '/help-center' }, 
            { label: t('dropdownButtonThree.submenu.blog'), route: '/blog' }, 
            { label: t('dropdownButtonThree.submenu.documents'), route: '/documents' },
            { label: t('dropdownButtonThree.submenu.newsletter'), route: '/newsletter' }
          ]}
          onClick={(dropdownButtonId) => setSelectedDropdownButton(dropdownButtonId)}
        />
        <DropdownButton
          id='dropdown-button-4'
          label={t('dropdownButtonFour.label')}
          route='/create'
          isSelected={selectedDropdownButton === "dropdown-button-4"}
          onClick={(dropdownButtonId) => setSelectedDropdownButton(dropdownButtonId)}
        />
      </ul>
    </nav>
  );
}

export default NavBar;
