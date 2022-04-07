import React from 'react';
import styles from './card.module.scss';

type Props = {
  width?: string,
  height?: string,
}

const Card: React.FC<Props> = ({ width = "300px", height = "300px"  }) => {

  return (
    <div
      className={styles.card}
      style={{
        width: width,
        height: height
      }}>
    </div>
  );
}

export default Card;
