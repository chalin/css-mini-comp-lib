import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './ProgressBar';
import type { Size } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    value: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'] as Size[],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 50,
    size: 'medium',
    width: 370,
  },
};
