import clsx from 'clsx';

import type { InputHTMLAttributes } from 'react';

import styles from './UiCheckbox.module.scss';

type TCheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export const UiCheckbox = ({ className, ...props }: TCheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={clsx(styles.checkbox, className)}
      {...props}
    />
  );
};
