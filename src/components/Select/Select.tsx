import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon/Icon';
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
  display: inline-block;
  // min-height: 2.75rem;
  cursor: pointer;

  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  // border: 2px solid transparent; // Figma says gray700 but that's not what it looks like
  border: none;
  border-radius: 8px;

  font-size: 1rem;
  line-height: 1;
  font-weight: 400;

  &:hover {
    color: ${COLORS.black};
  }
`;

const sharedSelectStyles = `
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

  ${sharedSelectStyles}
  color: blue;
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto 0;
  height: 24px;
  pointer-events: none; // Allow clicks to pass through to select
`;

const DisplayedOption = styled.div`
  // white-space: nowrap;
  ${sharedSelectStyles}
  // For debugging, to see if text matches select text position
  color: red;
`;

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  children,
}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
      <DisplayedOption>
        {displayedValue}
      </DisplayedOption>
      <SelectIcon id="chevron-down" strokeWidth={2} />
      <StyledSelect id={id} value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
