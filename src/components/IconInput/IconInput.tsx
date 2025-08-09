// CSS Module version of AllInput variant(?)

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
  const width = _width && _width < minWidth ? minWidth : _width;
  const widthProp = width
    ? ({ '--width': `${width}px` } as React.CSSProperties)
    : {}; // fall back to default block width

  const id = React.useId();

  const styleSize = size ? styles[size] : '';
  return (
    <div
      className={`${styles.iconInput} ${styleSize}`}
      style={widthProp}
    >
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <Icon
        id={icon}
        strokeWidth={strokeWidth}
        //size={iconSize}
        className={`${styles.icon} ${styleSize}`}
      />
      <input
        type="text"
        className={`${styles.input} ${styleSize}`}
        placeholder={placeholder}
        id={id}
        aria-labelledby={id}
      />
    </div>
  );
};

export default IconInput;
