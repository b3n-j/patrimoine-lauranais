import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import AppContext from '../../../../../app/app-context';
import styles from './dropdown-button.module.scss';

type Props = {
  id: string,
  label?: string,
  icon?: string,
  route: string,
  isSelected?: boolean,
  menu?: {
    label?: string,
    icon?: string,
    route: string,
  }[],
  onClick: (drodownButtonId: string) => void,
}

const DropdownButton: React.FC<Props> = ({ id, label, icon, route, menu, isSelected, onClick }) => {
  const isDarkMode = useContext(AppContext).settings.isDarkMode;

  const DropdownButtonMenuItem: React.FC<{ id: string, route: string, label: string | undefined, icon: string | undefined }> = ({ id, route, label, icon }) => {
    return (
      <li
        key={id}
        className={styles.dropdownButtonMenuItem}
        aria-label={`Menu Item ${label}`}
      >
        <Link 
          className={styles.dropdownButtonMenuItemLink}
          to={route}>
          {icon &&
            <ReactSVG
              src={icon}
              className={styles.dropdownButtonMenuItemIcon}
            />
          }
          <label className={styles.dropdownButtonMenuItemLabel}>
            {label}
          </label>
        </Link>
      </li>
    )
  }

  return (
    <li
      id={id}
      key={id}
      onClick={() => onClick(id)}
      className={!isSelected ? styles.dropdownButton : `${styles.dropdownButton} ${styles.selected}`}
    >
      <Link
        title={label}
        aria-label={label}
        to={route}
        className={styles.dropdownButtonLink}
      >
        {icon &&
          <ReactSVG
            src={icon}
            className={styles.dropdownButtonIcon}
          />}
        {label &&
          <label className={styles.dropdownButtonLabel}>
            {label}
          </label>
        }
      </Link>
      {menu &&
        <ul className={isDarkMode ? `${styles.dropdownButtonMenu} ${styles.dark}` : styles.dropdownButtonMenu} >
          {menu.map((dropdownMenuItem, idx) => {
            return (
              <DropdownButtonMenuItem
                id={`dropdown-menu-item-${idx}-${dropdownMenuItem.label}`}
                label={dropdownMenuItem.label}
                icon={dropdownMenuItem.icon}
                route={dropdownMenuItem.route}
              />
            )
          })}
        </ul>
      }
    </li>
  )
}

export default DropdownButton;
