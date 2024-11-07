import { UiButton } from 'shared/ui';

import type { HTMLAttributes } from 'react';

import styles from './ToggleGroupButton.module.scss';

type TToggleGroupButtonProps = {
  buttons: { value: string; isActive: boolean }[];
  handleButtonClick?: (value: string) => void;
} & HTMLAttributes<HTMLElement>;

export const ToggleGroupButton = ({
  buttons,
  handleButtonClick,
}: TToggleGroupButtonProps) => {
  return (
    <div className={styles.toggleGroup}>
      {buttons.map(({ value, isActive }) => (
        <UiButton
          key={value}
          variant="toggle"
          size="large"
          data-disabled={isActive ? undefined : true}
          onClick={() => handleButtonClick?.(value)}
        >
          {value}
        </UiButton>
      ))}
    </div>
  );
};
