import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import IconInput from './IconInput';

const meta: Meta<typeof IconInput> = {
  title: 'IconInput',
  component: IconInput,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['search', 'at-sign'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search…',
    label: 'Search',
    icon: 'search',
    size: 'small',
  },
};
