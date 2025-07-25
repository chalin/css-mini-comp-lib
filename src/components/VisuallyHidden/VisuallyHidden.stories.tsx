import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import VisuallyHidden from './VisuallyHidden';
import Icon from '../Icon/Icon';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'VisuallyHidden',
  component: VisuallyHidden,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Icon id="search" />
      <VisuallyHidden>Search</VisuallyHidden>
    </>
  ),
};
