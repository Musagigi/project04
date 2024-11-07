import { useRef, useState } from 'react';
import clsx from 'clsx';

import { UiContainer } from 'shared/ui';
import { Logotip } from 'entities/Logotip/Logotip';
import { Navigation } from 'entities/Navigation/Navigation';
import { ButtonBurger } from './ui/ButtonBurger/ButtonBurger';

import { useOnClickOutside } from 'shared/hooks/useOnClickOutside';
import { HEADER_NAV } from 'shared/constans/headerNav';

import styles from './Header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  const handleClick = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <header className={styles.header}>
      <UiContainer>
        <div className={styles.headerContent}>
          <Logotip />
          <div
            ref={ref}
            className={styles.headerMenu}
          >
            <Navigation
              unorderList={HEADER_NAV}
              className={clsx(styles.navigation, isOpen && styles.active)}
            />
            <ButtonBurger
              isOpen={isOpen}
              handleClick={handleClick}
            />
          </div>
        </div>
      </UiContainer>
    </header>
  );
};
