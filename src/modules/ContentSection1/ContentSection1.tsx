import { UiButton, UiTypography } from 'shared/ui';

import { HERO_DESCRIPTION, HERO_TITLE } from './lib/constans';
import { MAKE_CALL } from 'shared/constans/common';
import styles from './ContentSection1.module.scss';

export const ContentSection1 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.section1Content}>
        <UiTypography
          variant="h1Bold"
          tag="h1"
          className={styles.section1ContentTitle}
        >
          {HERO_TITLE}
        </UiTypography>
        <UiTypography
          variant="h3Regular"
          tag="p"
          className={styles.section1ContentSubtitle}
        >
          {HERO_DESCRIPTION}
        </UiTypography>
        <UiButton className={styles.section1ContentButton}>
          {MAKE_CALL}
        </UiButton>
      </div>
    </section>
  );
};
