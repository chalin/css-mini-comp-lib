import React from 'react';

export function getDisplayedValue(
  value: string,
  children: React.ReactNode,
): string {
  const childArray = React.Children.toArray(children);

  for (const child of childArray) {
    if (React.isValidElement(child) && (child as any).props.value === value) {
      return (child as any).props.children || '';
    }
  }

  return '';
}
