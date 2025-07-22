import React from 'react';
import IconInput from './IconInput.jsx';

export default {
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

export const Default = {
  args: {
    placeholder: 'Search…',
    label: 'Search',
    icon: 'search',
    size: 'small',
  },
};