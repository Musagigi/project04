import { Icon, UiTypography } from 'shared/ui';

import { TITLE_SECTION_4 } from './lib/constans';
import styles from './ContentSection4.module.scss';

export const ContentSection4 = () => {
  return (
    <section className={styles.section4}>
      <div className={styles.section4Content}>
        <UiTypography
          tag="p"
          variant="h3Bold"
        >
          {TITLE_SECTION_4}
        </UiTypography>
        <div className={styles.section4ContentInfo}>
          <Icon
            name="IconCliclWave"
            className={styles.section4ContentInfoLogo1}
          />
          <Icon
            name="IconZyphronix"
            className={styles.section4ContentInfoLogo2}
          />
          <Icon
            name="IconNovasphere"
            className={styles.section4ContentInfoLogo3}
          />
        </div>
      </div>
    </section>
  );
};
