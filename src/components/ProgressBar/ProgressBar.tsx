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

type SizeProps = Record<
  Size,
  { height: string; borderRadius: string; padding: string }
>;
const sizeProps: SizeProps = {
  small: {
    height: '8px',
    borderRadius: '4px',
    padding: '0',
  },
  medium: {
    height: '12px',
    borderRadius: '4px',
    padding: '0',
  },
  large: {
    height: '24px',
    borderRadius: '8px',
    padding: '3px',
  },
};

interface StyledProgressProps {
  size?: Size;
  value?: number;
}

const _sizeProp =
  (propName: keyof SizeProps[Size]) => (props: StyledProgressProps) =>
    props.size && sizeProps[props.size][propName];

// Using notes from https://css-tricks.com/html5-progress-element/

const ProgressElt = styled.progress<StyledProgressProps>`
  // Reset the default appearance
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none; // Get rid of default border in Firefox

  height: ${_sizeProp('height')};
  border-radius: ${_sizeProp('borderRadius')};
  width: var(--width);

  box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;

  /* Webkit browsers (Chrome, Safari, Edge) */
  -webkit-appearance: none;
  &::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: ${_sizeProp('borderRadius')};
    padding: ${_sizeProp('padding')};
  }
  &::-webkit-progress-value {
    background-color: ${COLORS.primary};
    border-radius: ${_sizeProp('borderRadius')} 0 0 ${_sizeProp('borderRadius')};
    border-radius: 4px 0 0 4px;
    ${({ value }) => value && value > 99 && 'border-radius: 4px;'}
  }

  &::-webkit-progress-inner-element {
    border-radius: ${_sizeProp('borderRadius')};
  }

  /* Firefox */
  -moz-appearance: none;
  &::-moz-progress-bar {
    background-color: ${COLORS.primary};
    // padding doesn't work in FF. Approximate it with margin.
    margin: ${_sizeProp('padding')};
    // Ensure we can see value of 1:
    ${({ value }) => value === 1 && 'margin-right: 0;'}
    height: calc(100% - ${_sizeProp('padding')} * 2);
  }
`;

const minWidth = 10;
const defaultWidth = 160;
const ProgressBar: React.FC<ProgressBarProps> = ({
  value: _value,
  size = 'medium',
  width: _width = defaultWidth, // Match typical browser default
}) => {
  // Normalize the value to be between 0 and 100
  const value = _value < 0 ? 0 : _value > 100 ? 100 : _value;
  const width = _width < minWidth ? minWidth : _width;

  return (
    <ProgressElt
      value={value}
      max={100}
      style={{ '--width': width + 'px' } as React.CSSProperties}
      size={size}
    >
      {value + '%'}
    </ProgressElt>
  );
};

export default ProgressBar;
