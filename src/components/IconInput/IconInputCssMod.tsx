import React from 'react';
import Icon from '../Icon/Icon';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
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
    : {};

  const id = React.useId();

  // Design: we put the icon inside the label so that the input can be focused
  // by clicking on the icon.

  return (
    <div
      className={`${styles.iconInput} ${size ? styles[size] : ''}`}
      style={widthProp}
    >
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <Icon
          id={icon}
          strokeWidth={strokeWidth}
          size={iconSize}
          className={styles.icon}
        />
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        aria-labelledby={id}
        className={styles.input}
      />
    </div>
  );
};

export default IconInput;
