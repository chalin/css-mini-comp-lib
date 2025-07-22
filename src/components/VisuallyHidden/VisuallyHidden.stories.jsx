import React from 'react';
import VisuallyHidden from './VisuallyHidden.jsx';
import Icon from '../Icon/Icon.jsx';

export default {
  title: 'VisuallyHidden',
  component: VisuallyHidden,
};

export const Default = () => (
  <>
    <Icon id="search" />
    <VisuallyHidden>Search</VisuallyHidden>
  </>
);