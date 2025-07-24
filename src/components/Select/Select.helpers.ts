import React from 'react';

export function getDisplayedValue(
  value: string,
  children: React.ReactNode,
): string {
  const childArray = React.Children.toArray(children);

  for (const child of childArray) {
    if (!React.isValidElement(child)) continue;
    const props = (
      child as React.ReactElement<{ value: string; children: string }>
    ).props;
    if (props.value === value) return props.children || '';
  }

  return '';
}
