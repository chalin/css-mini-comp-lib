import React from 'react';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import styles from './ProgressBar.module.scss';

export type Size = 'small' | 'medium' | 'large';
interface ProgressBarProps {
  value: number;
  size?: Size;
  width?: number;
}

const minValue = 0;
const maxValue = 100;
const minWidth = 10;
const defaultWidth = 160;

const ProgressBar: React.FC<ProgressBarProps> = ({
  value: _value,
  size = 'medium',
  width: _width = defaultWidth,
  ...delegated
}) => {
  // Normalize the value to be between 0 and 100
  const value =
    _value < minValue ? minValue : _value > maxValue ? maxValue : _value;
  const width = _width < minWidth ? minWidth : _width;

  return (
    <div
      {...delegated}
      className={`${styles.progressBar} ${styles[size]}`}
      style={
        {
          '--width': width + 'px',
          '--progress-width': value + '%',
        } as React.CSSProperties
      }
      role="progressbar"
      aria-valuenow={value}
    >
      <VisuallyHidden>{value + '%'}</VisuallyHidden>
      <div className={styles.barContainer}>
        <div className={styles.bar} />
      </div>
    </div>
  );
};

export default ProgressBar;
