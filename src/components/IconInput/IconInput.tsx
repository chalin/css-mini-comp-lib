// CSS Module version

import React from 'react';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import styles from './IconInput.module.scss';

interface IconInputProps {
  label: string;
  icon: 'search' | 'at-sign';
  width?: number;
  size?: 'small' | 'large';
  placeholder?: string;
}

const minWidth = 100;

const IconInput: React.FC<IconInputProps> = ({
  label,
  icon,
  width: _width, // = 250,
  size,
  placeholder,
}) => {
  const strokeWidth = size === 'small' ? 1 : 2;
  const iconSize = size === 'small' ? 16 : 24;
  const width = _width && _width < minWidth ? minWidth : _width;
  const widthProp = width
    ? ({ '--width': `${width}px` } as React.CSSProperties)
    : {}; // fall back to default block width

  const id = React.useId();

  return (
    <div
      className={`${styles.iconInput} ${size ? styles[size] : ''}`}
      style={widthProp}
    >
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <Icon
        id={icon}
        strokeWidth={strokeWidth}
        size={iconSize}
        className={styles.icon}
      />
      <input
        type="text"
        className={`${styles.input} ${size ? styles[size] : ''}`}
        placeholder={placeholder}
        id={id}
        aria-labelledby={id}
      />
    </div>
  );
};

export default IconInput;
