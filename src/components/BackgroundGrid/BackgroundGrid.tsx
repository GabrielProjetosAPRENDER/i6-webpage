import React from 'react';
import styles from './BackgroundGrid.module.css';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.gridOverlay} />
      <div className={styles.glowBlob1} />
      <div className={styles.glowBlob2} />
      <div className={styles.noiseOverlay} />
    </div>
  );
};

export default BackgroundGrid;
