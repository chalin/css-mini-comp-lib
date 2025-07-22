import React from 'react';
import ProgressBar from './ProgressBar.jsx';

export default {
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
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export const Default = {
  args: {
    value: 50,
    size: 'medium',
  },
};