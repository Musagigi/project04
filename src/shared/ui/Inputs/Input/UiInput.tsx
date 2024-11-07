import { forwardRef } from 'react';
import clsx from 'clsx';

import type { InputHTMLAttributes } from 'react';

import styles from './UiInput.module.scss';

type TUiInputProps = {
  error?: string;
  labelText?: string;
  labelHtmlFor?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const UiInput = forwardRef<HTMLInputElement, TUiInputProps>(
  (
    { error, type = 'text', labelHtmlFor, labelText, className, ...props },
    ref,
  ) => {
    return (
      <fieldset>
        <label htmlFor={labelHtmlFor}>{labelText}</label>
        <input
          ref={ref}
          type={type}
          className={clsx(styles.input, error && styles.errorInput, className)}
          {...props}
        />
        {error && <span className={styles.errorText}>{error}</span>}
      </fieldset>
    );
  },
);
