import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

// Create a proper React component to avoid Hook rules violation
const ManagedSelect = () => {
  const [value, setValue] = React.useState('newest');
  return (
    <>
      <label
        htmlFor="filter-by"
        style={{
          display: 'block',
          marginBottom: '0.5em',
        }}
      >
        Filter by:
      </label>
      <Select
        id="filter-by"
        label="Sort"
        value={value}
        onChange={(ev) => setValue(ev.target.value)}
      >
        <option value="newest">
          <b>Newest</b> Releases
        </option>
        <option value="price">Price</option>
        <option value="curated">Curated</option>
        <option value="long">Really long selected option!</option>
      </Select>
      <hr />
      <select>
        <option value="newest">
          <b>Newest</b> Releases
        </option>
        <option value="price">Price</option>
        <option value="curated">Curated</option>
        <option value="long">Really long selected option!</option>
      </select>
      <hr />
      <select>
        <option value="newest">New</option>
        <option value="price">Price</option>
        <option value="curated">Curated</option>
      </select>
    </>
  );
};

export const Default: Story = {
  render: () => <ManagedSelect />,
};
