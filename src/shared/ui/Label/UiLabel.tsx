import clsx from 'clsx';

import type { LabelHTMLAttributes } from 'react';

import styles from './UiLabel.module.scss';

type TUiLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const UiLabel = ({ children, className, ...props }: TUiLabelProps) => {
  return (
    <label
      className={clsx(styles.label, className)}
      {...props}
    >
      {children}
    </label>
  );
};
