import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { ChevronDown } from 'react-feather';
// import Icon from '../Icon/Icon';
import { getDisplayedValue } from './Select.helpers';

interface SelectProps {
  id: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
}

const SelectWrapper = styled.div`
  position: relative;
  width: max-content;

  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  // border: 2px solid transparent; // Figma says gray700 but that's not what it looks like
  border: none;
  border-radius: 0.5rem;

  font-size: 1rem;
  line-height: 1;
  font-weight: 400;

  &:focus-within {
    outline: 2px solid Highlight;
    outline: 2px solid -webkit-focus-ring-color;
    @supports (-moz-appearance: none) {
      outline: 2px solid Highlight;
    }
  }
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledSelect = styled.select`
  // Reset
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  // Trick to "hide" the select element by making it transparent, but still
  // allow it to process clicks.
  opacity: 0;
`;

const StyledChevronDown = styled(ChevronDown)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0.75rem;
  margin: auto 0;

  height: 1.5rem;
  width: 1.5rem;

  stroke-width: 2;
`;

const DisplayedOption = styled.div`
  padding: 0.75rem 1rem;
  padding-right: 3.25rem;
  background-color: transparent;
  border: none;
  border-radius: inherit;

  color: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
`;

const Select: React.FC<SelectProps> = ({
  id,
  value,
  onChange,
  children,
}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <DisplayedOption>{displayedValue}</DisplayedOption>
      <StyledChevronDown />
      <StyledSelect id={id} value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
