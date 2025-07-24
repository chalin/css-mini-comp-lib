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

type SizeProps = Record<
  Size,
  { height: string; borderRadius: string; padding: string }
>;

const GRID_SIZE = '4px';
const sizeProps: SizeProps = {
  small: {
    height: '8px',
    borderRadius: GRID_SIZE,
    padding: '0',
  },
  medium: {
    height: '12px',
    borderRadius: GRID_SIZE,
    padding: '0',
  },
  large: {
    height: '24px',
    borderRadius: `calc(2 * ${GRID_SIZE})`,
    padding: GRID_SIZE,
  },
};

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

  const sizeConfig = sizeProps[size];

  return (
    <div
      {...delegated}
      className={styles.progressBar}
      style={
        {
          '--height': sizeConfig.height,
          '--width': width + 'px',
          '--bg-color': COLORS.transparentGray15,
          '--border-radius': sizeConfig.borderRadius,
          '--padding': sizeConfig.padding,
          '--primary-color': COLORS.primary,
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
