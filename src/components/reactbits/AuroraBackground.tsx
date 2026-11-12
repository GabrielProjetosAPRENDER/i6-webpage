import React from 'react';
import styles from './AuroraBackground.module.css';

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  children,
  className = '',
  showRadialGradient = true,
}) => {
  return (
    <div className={`${styles.auroraContainer} ${className}`}>
      <div className={styles.auroraGlow} />
      <div className={styles.auroraGrid} />
      {showRadialGradient && <div className={styles.radialMask} />}
      <div className={styles.auroraContent}>{children}</div>
    </div>
  );
};
