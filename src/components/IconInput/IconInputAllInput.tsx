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

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  border-bottom: 1px solid ${COLORS.black};

  color: ${COLORS.gray700};

  &.small {
    font-size: ${14 / 16}rem;
    line-height: ${16 / 16}rem;
  }

  &.large {
    font-size: ${18 / 16}rem;
    line-height: ${21 / 16}rem;
    border-bottom-width: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  appearance: none;
  border: none;
  width: 100%;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 700;

  margin-bottom: ${2 / 16}rem;

  &.small {
    padding-left: ${24 / 16}rem;
  }

  &.large {
    padding-left: ${32 / 16}rem;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-size: inherit;
    line-height: inherit;
    font-weight: 400;
  }

  &:focus {
    outline-offset: 8px;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: 0;
  color: inherit;
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

  return (
    <Wrapper className={size} style={widthProp}>
      <label htmlFor={id}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      <StyledIcon id={icon} strokeWidth={strokeWidth} size={iconSize} />
      <Input
        type="text"
        className={size}
        placeholder={placeholder}
        id={id}
        aria-labelledby={id}
      />
    </Wrapper>
  );
};

export default IconInput;
