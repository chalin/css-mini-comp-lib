/**
 * We're given this component "for free" since it's really more
 * specific to React and React Feather. Feel free to read if you're
 * interested, but otherwise you can rely on our docs to learn its
 * API / which props it takes.
 */

// @chalin: I've tweaked this wrapper component to better match (IMHO) the
// semantics of RF's Icons.

import React from 'react';
import styled from 'styled-components';
import { Search, AtSign, ChevronDown } from 'react-feather';

const icons = {
  search: Search,
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
};

interface IconProps {
  id: keyof typeof icons;
  size?: number;
  strokeWidth?: number;
  [key: string]: unknown; // for delegated props
}

const Icon: React.FC<IconProps> = ({
  id,
  size,
  strokeWidth = 1,
  ...delegated
}) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper
      style={
        {
          // '--size': size && `${size}px`,
          '--stroke-width': `${strokeWidth}px`,
        } as React.CSSProperties
      }
      // @chalin: I think that these should be applied to the icons, but will
      // leave it here for now.
      {...delegated}
    >
      <Component
        color="currentColor"
        size={size} // {...(size !== undefined && { size })}
      />
    </Wrapper>
  );
};

const Wrapper = styled.span`
  display: inline-block;
  // width: var(--size);
  // height: var(--size);

  /*
    OMG I'm doing that thing I've warned against doing!
    Unfortunately, react-feather doesn't make it possible to pass
    discrete styles to the nested SVG within its components.

    Because I'm "reaching in" to third-party code, though, it feels
    OK. In my mind, this Icon is my bridge to that third-party code,
    and if I have to do some hacky stuff, that's fine. It's
    a special circumstance, and I won't ever have to look at the
    react-feather JSX and try to work out where this SVG style
    is coming from.
  */
  & > svg {
    // display: block; // Why override this?
    stroke-width: var(--stroke-width);
  }
`;

export default Icon;
