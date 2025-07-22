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

const IconInput: React.FC<IconInputProps> = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return 'TODO';
};

export default IconInput;
