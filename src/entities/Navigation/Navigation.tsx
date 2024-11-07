import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { HEADER_NAV } from 'shared/constans/headerNav';

import { UiLink } from 'shared/ui';

type TNavigationProps = {
  unorderList: Array<(typeof HEADER_NAV)[number]>;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export const Navigation = forwardRef<HTMLElement, TNavigationProps>(
  ({ unorderList, className }, ref) => {
    return (
      <nav
        // ref={sectionsRef}
        className={className}
      >
        <ul>
          {unorderList.map((item) => (
            <UiLink
              key={item.id}
              variant="text"
              href={`#${item.id}`}
              // onClick={() => handleNavClick(item.id)}
              // data-active={!!isIntersecting === item.id}
            >
              {item.name}
            </UiLink>
          ))}
        </ul>
      </nav>
    );
  },
);
