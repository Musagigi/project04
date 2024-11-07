import { lazy, Suspense } from 'react';

import { icons } from '../../assets/icons';

import type { SVGProps } from 'react';

type TIcon = {
  name: keyof typeof icons;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ name, ...props }: TIcon) => {
  const SVGIcon = lazy(() => icons[name]);

  return (
    <Suspense fallback={null}>
      <SVGIcon {...props} />
    </Suspense>
  );
};
