import React from 'react';
import Select from './Select.jsx';

export default {
  title: 'Select',
  component: Select,
};

export const Default = () => {
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
        <option value="newest">Newest Releases</option>
        <option value="price">Price</option>
        <option value="curated">Curated</option>
      </Select>
    </>
  );
};