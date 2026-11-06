import React from 'react';

interface LogoProps {
  lightText?: boolean;
  size?: number;
  hideText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ lightText = false, size = 36, hideText = false }) => {
  const textColorClass = lightText ? '#FFFFFF' : '#0B132B';
  const subtextColorClass = lightText ? '#94A3B8' : '#475569';
  const iconColor = lightText ? '#FFFFFF' : '#0B132B';
  const brandBlue = '#0055FF';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{ flexShrink: 0 }}
      >
        {/* Dark Navy Swoosh (Left) */}
        <path d="M 65 10 A 42 42 0 0 0 25 85" stroke={iconColor} strokeWidth="6" strokeLinecap="round" fill="none" />
        
        {/* Bright Blue Swoosh (Right) */}
        <path d="M 35 90 A 42 42 0 0 0 75 15" stroke={brandBlue} strokeWidth="4" strokeLinecap="round" fill="none" />
        
        {/* i6 Text inside */}
        {/* Dotless i */}
        <text x="38" y="70" fontFamily="var(--font-family), sans-serif" fontSize="56" fontWeight="bold" fill={iconColor} textAnchor="middle">ı</text>
        {/* Blue Dot for i */}
        <circle cx="38" cy="28" r="6" fill={brandBlue} />
        {/* Number 6 */}
        <text x="64" y="70" fontFamily="var(--font-family), sans-serif" fontSize="56" fontWeight="bold" fill={iconColor} textAnchor="middle">6</text>
      </svg>
      
      {!hideText && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15, textAlign: 'left' }}>
          <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.15em', color: textColorClass, fontFamily: 'var(--font-family)' }}>
            SYSTEMS
          </span>
          <span style={{ fontWeight: 600, fontSize: '0.5rem', letterSpacing: '0.12em', color: subtextColorClass, fontFamily: 'var(--font-family)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{flex: 1, height: '1px', backgroundColor: brandBlue}}></span>
            SOLUÇÕES EM SOFTWARE
            <span style={{flex: 1, height: '1px', backgroundColor: brandBlue}}></span>
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
