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

const Select: React.FC<SelectProps> = ({
  id,
  label,
  value,
  onChange,
  children,
}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <select id={id} value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
