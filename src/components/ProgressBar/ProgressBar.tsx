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

const borderRadiusDefault = '4px';
const sizeProps: SizeProps = {
  small: {
    height: '8px',
    borderRadius: borderRadiusDefault,
    padding: '0',
  },
  medium: {
    height: '12px',
    borderRadius: borderRadiusDefault,
    padding: '0',
  },
  large: {
    height: '24px',
    borderRadius: '8px',
    padding: '4px',
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

const ProgressElt = styled.div<StyledProgressProps>`
  height: ${_sizeProp('height')};
  width: var(--width);

  background-color: ${COLORS.transparentGray15};
  border-radius: ${_sizeProp('borderRadius')};
  box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
  overflow: hidden;

  padding: ${_sizeProp('padding')};

  .bar {
    background-color: ${COLORS.primary};
    height: 100%;
    width: ${({ value }) => value + '%'};
    background-color: ${COLORS.primary};
    border-radius: ${borderRadiusDefault} 0 0 ${borderRadiusDefault};
    ${({ value }) =>
      value && value > 98 && `border-radius: ${borderRadiusDefault};`}
  }
`;

const minValue = 0;
const maxValue = 100;
const minWidth = 10;
const defaultWidth = 160;

const ProgressBar: React.FC<ProgressBarProps> = ({
  value: _value,
  size = 'medium',
  width: _width = defaultWidth, // Match typical browser default
  ...delegated
}) => {
  // Normalize the value to be between 0 and 100
  const value =
    _value < minValue ? minValue : _value > maxValue ? maxValue : _value;
  const width = _width < minWidth ? minWidth : _width;

  return (
    <ProgressElt
      {...delegated}
      value={value}
      style={{ '--width': width + 'px' } as React.CSSProperties}
      size={size}
      // Accessibility:
      role="progressbar"
      aria-valuenow={value}
      // Unnecessary when using 0-100 defaults
      // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role#description:
      // aria-valuemin={minValue}
      // aria-valuemax={maxValue}
    >
      <VisuallyHidden>{value + '%'}</VisuallyHidden>
      <div className="bar" />
    </ProgressElt>
  );
};

export default ProgressBar;
