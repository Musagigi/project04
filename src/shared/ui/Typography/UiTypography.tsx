import clsx from 'clsx';

import type { ComponentProps, ReactNode } from 'react';

import styles from './UiTypography.module.scss';

type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type TypographyVariant =
  | 'h1Bold'
  | 'h2Bold'
  | 'h3Bold'
  | 'h3Regular'
  | 'fontButton'
  | 'paragraph22Regular'
  | 'paragraph18Regular'
  | 'paragraph14Regular';

type UiTypographyProps<Tag extends TypographyTag> = {
  tag?: TypographyTag;
  variant?: TypographyVariant;
  children: ReactNode;
} & ComponentProps<Tag>;

export const UiTypography = <Tag extends TypographyTag = 'p'>({
  variant = 'paragraph14Regular',
  tag = 'p',
  children,
  className,
  ...props
}: UiTypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component
      className={clsx(styles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};
