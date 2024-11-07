import { UiTypography } from 'shared/ui';

import styles from './Logotip.module.scss';

export const Logotip = () => {
  return (
    <a
      className={styles.logo}
      href="#"
    >
      <UiTypography
        className={styles.logoText}
        variant="h3Bold"
      >
        logo
      </UiTypography>
    </a>
  );
};
