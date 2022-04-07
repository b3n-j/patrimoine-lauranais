import React from 'react';
import { useParams } from 'react-router-dom';
import { DeviceType } from '../../../hooks/use-device-type';
import styles from './item-page.module.scss';

type Props = {
  deviceType: DeviceType,
}

const ItemPage: React.FC<Props> = ({ deviceType }) => {

  const urlParams: {itemId: string} = useParams();

  return (
    <h1 className={styles.itemTitle}>{urlParams.itemId}</h1>
  );
}

export default ItemPage;