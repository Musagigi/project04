import clsx from 'clsx';

import type { TextareaHTMLAttributes } from 'react';

import styles from './UiTextarea.module.scss';

type TUiTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const UiTextarea = ({
  children,
  className,
  ...props
}: TUiTextareaProps) => {
  return (
    <textarea
      placeholder="Напишите свой вопрос"
      className={clsx(styles.textarea, className)}
      {...props}
    >
      {children}
    </textarea>
  );
};
