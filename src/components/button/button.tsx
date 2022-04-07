import AppContext from 'app/app-context';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './button.module.scss';

export enum ButtonType {
  NORMAL,
  OUTLINED,
}

type Props = {
  label: string,
  ariaLabel?: string,
  type?: ButtonType,
  width?: string,
  height?: string,
  slug?: string,  
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onHover?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

const Button: React.FC<Props> = ({ label, ariaLabel, type, width, height = "45px", slug, onHover, onClick }) => {
  const isDarkMode = useContext(AppContext).settings.isDarkMode;
  const history = useHistory();

  function setButtonStyle() {
    if (!type) return styles.normal;
    switch (type) {
      case ButtonType.OUTLINED:
        return styles.outlined;
      default:
        return styles.normal;
    };
  }

  return (
    <div className={!isDarkMode ? styles.button : styles.darkButton}>
      <button
        className={setButtonStyle()}
        aria-label={ariaLabel ? ariaLabel : label}
        onClick={(e) => slug ? history.push(slug) : onClick && onClick(e)}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        style={{
          minWidth: width && width,
          minHeight: height && height
        }}
      >
        <label className={styles.label}>{label}</label>
      </button>
    </div>
  );
}

export default Button;
