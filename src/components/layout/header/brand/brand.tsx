import React from 'react';
import styles from './brand.module.scss';
import { Link } from 'react-router-dom';

const Brand: React.FC = () => {

  return (
    <Link className={styles.link} to='/'>
      {/* <img src={myTemplateLogo} alt='logo' aria-label='logo'/> */}
      <div className={styles.brand}>
        <label className={styles.label}>mT</label>
        <span></span>
      </div>
    </Link>
  );
}

export default Brand;
