import React from 'react';

export function getDisplayedValue(
  value: string,
  children: React.ReactNode,
): string {
  const childArray = React.Children.toArray(children);

  for (const child of childArray) {
    if (
      React.isValidElement(child) &&
      (child as React.ReactElement<{ value: string }>).props.value === value
    ) {
      return (
        (child as React.ReactElement<{ children: string }>).props.children || ''
      );
    }
  }

  return '';
}
