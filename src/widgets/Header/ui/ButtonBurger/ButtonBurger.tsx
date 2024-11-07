import clsx from 'clsx';

import styles from './ButtonBurger.module.scss';

type TButtonBurgerProps = {
  isOpen?: boolean;
  handleClick?: () => void;
  className?: string;
};

export const ButtonBurger = ({
  isOpen,
  handleClick,
  className,
}: TButtonBurgerProps) => {
  return (
    <button
      onClick={handleClick}
      className={clsx(styles.burgerWrapper, className)}
    >
      <div className={styles.burger}>
        <span
          className={clsx(styles.burgerLine, isOpen && styles.burgerLineActive)}
        />
      </div>
    </button>
  );
};
