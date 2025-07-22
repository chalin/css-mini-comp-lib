import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

export type Size = 'small' | 'medium' | 'large';
interface ProgressBarProps {
  value: number;
  size?: Size;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, size }) => {
  return <strong>{value}</strong>;
};

export default ProgressBar;
