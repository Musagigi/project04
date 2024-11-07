import clsx from 'clsx';

import { forwardRef, type ElementType, type ReactNode } from 'react';

import styles from './UiContainer.module.scss';

type TUiContainer = {
  children: ReactNode;
  className?: string;
  component?: ElementType;
};

export const UiContainer = forwardRef<ElementType, TUiContainer>(
  ({ children, className, component: Component = 'div' }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(styles.container, className)}
      >
        {children}
      </Component>
    );
  },
);
