import React from 'react';
import { Link } from 'react-router-dom';
import { DeviceType } from '../../hooks/use-device-type';
import styles from './all-items-page.module.scss';

type Props = {
  deviceType: DeviceType
}

const AllItemsPage: React.FC<Props> = ({ deviceType }) => {  

  return (
    <>
      <h1 className={styles.allItems}>AllItemsPage</h1>
      <h2 className={styles.allItems}>AllItemsPage</h2>
      <h3 className={styles.allItems}>AllItemsPage</h3>
      <h4 className={styles.allItems}>AllItemsPage</h4>
      <h5 className={styles.allItems}>AllItemsPage</h5>
      <Link to='all-items/item'>Item 1</Link>
      <Link to='all-items/item2'>Item 2</Link>
    </>
  );
}

export default AllItemsPage;
