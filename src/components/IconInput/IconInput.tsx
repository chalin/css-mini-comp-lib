import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon/Icon';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

interface IconInputProps {
  label: string;
  icon: 'search' | 'at-sign';
  width?: number;
  size?: 'small' | 'large';
  placeholder?: string;
}

const Wrapper = styled.div<{ style: React.CSSProperties }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${COLORS.black};

  font-weight: 700;

  &.small {
    font-size: ${14 / 16}rem;
    line-height: ${16 / 16}rem;
  }

  &.large {
    font-size: ${18 / 16}rem;
    line-height: ${21 / 16}rem;
    border-bottom-width: 2px;
  }
  width: var(--width);

  &:focus-within {
    outline: 2px solid Highlight;
    outline-color: -webkit-focus-ring-color;
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const Input = styled.input`
  appearance: none;
  border: none;
  color: ${COLORS.gray700};
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const StyledIcon = styled(Icon)`
  color: ${COLORS.gray700};
`;

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
    <Wrapper className={size} style={widthProp}>
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
        <StyledIcon id={icon} strokeWidth={strokeWidth} size={iconSize} />
      </label>
      <Input
        type="text"
        placeholder={placeholder}
        id={id}
        aria-labelledby={id}
      />
    </Wrapper>
  );
};

export default IconInput;
