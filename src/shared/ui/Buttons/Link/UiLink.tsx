import { forwardRef } from 'react';
import clsx from 'clsx';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

import styles from './UiLink.module.scss';

type TUiLinkProps = {
  variant?: 'contained' | 'text' | 'toggle' | 'black';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const UiLink = forwardRef<HTMLAnchorElement, TUiLinkProps>(
  (
    {
      variant = 'contained',
      size = 'medium',
      startIcon,
      endIcon,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={clsx(
          styles.button,
          styles[variant],
          styles[size],
          className,
        )}
        {...props}
      >
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </a>
    );
  },
);
