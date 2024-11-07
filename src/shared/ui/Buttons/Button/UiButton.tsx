import { forwardRef } from 'react';
import clsx from 'clsx';

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './UiButton.module.scss';

type TUiButtonProps = {
  variant?: 'contained' | 'text' | 'toggle' | 'black';
  size?: 'small' | 'medium' | 'large';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const UiButton = forwardRef<HTMLButtonElement, TUiButtonProps>(
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
      <button
        ref={ref}
        type="button"
        className={clsx(styles.btn, styles[variant], styles[size], className)}
        {...props}
      >
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
      </button>
    );
  },
);
