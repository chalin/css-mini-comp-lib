import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

export type Size = 'small' | 'medium' | 'large';
interface ProgressBarProps {
  value: number;
  size?: Size;
  width?: number;
}

const sizeProps: Record<Size, string> = {
  small: `
    height: 8px;
  `,
  medium: `
    height: 12px;
  `,
  large: `
    height: 24px;
  `,
};

interface StyledProgressProps {
  size?: Size;
}

const ProgressElt = styled.progress<StyledProgressProps>`
  width: var(--width);
  // box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  // border: none;
  // border-color: ${COLORS.primary};
  ${(props) => props.size && sizeProps[props.size]}
`;

const ProgressBar: React.FC<ProgressBarProps> = ({
  value: _value,
  size,
  width = 160, // Match typical browser default
}) => {
  // Normalize the value to be between 0 and 100
  const value = _value < 0 ? 0 : _value > 100 ? 100 : _value;

  return (
    <ProgressElt
      value={value}
      max={100}
      style={{ '--width': width + 'px' } as React.CSSProperties}
      size={size}
    >
      {value}
    </ProgressElt>
  );
};

export default ProgressBar;
