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

const StyledSelect = styled.select`
  // Reset
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  // Custom
  font-size: 1rem;
  line-height: 1;
  font-weight: 400;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  border: 2px solid transparent; // Figma says gray700 but that's not what it looks like
  border-radius: 8px;

  padding: 0.75rem 1rem;
  padding-right: 3.25rem;

`;

const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 43px;
  cursor: pointer;
  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  right: 1rem;
  margin-top: auto;
  margin-bottom: auto;
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
      <StyledSelect id={id} value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <SelectIcon id="chevron-down" />
    </SelectWrapper>
  );
};

export default Select;
