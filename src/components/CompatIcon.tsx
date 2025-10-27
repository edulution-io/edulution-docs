import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

type IconType = 'check' | 'cross' | 'warning';

interface CompatIconProps {
  type: IconType;
}

const CompatIcon: React.FC<CompatIconProps> = ({ type }) => {
  const iconMap = {
    check: { icon: faCheck, className: 'mail-compat-check' },
    cross: { icon: faXmark, className: 'mail-compat-cross' },
    warning: { icon: faTriangleExclamation, className: 'mail-compat-warning' }
  };

  const { icon, className } = iconMap[type];

  return (
    <span className={`mail-compat-status ${className}`}>
      <FontAwesomeIcon icon={icon} />
    </span>
  );
};

export default CompatIcon;
