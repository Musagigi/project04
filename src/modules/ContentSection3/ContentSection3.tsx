import { Icon, UiButton, UiTypography } from 'shared/ui';
import { InfoDetail } from './ui/InfoDetail/InfoDetail';

import {
  TITLE_SECTION_3,
  SUBTITLE_INFO_LEFT,
  SUBTITLE_INFO_RIGHT,
  TITLE_INFO_LEFT,
  TITLE_INFO_RIGHT,
} from './lib/constans';
import styles from './ContentSection3.module.scss';

export const ContentSection3 = ({ id }: { id?: string }) => {
  return (
    <section
      id={id}
      className={styles.section3}
    >
      <div className={styles.section3Content}>
        <UiTypography
          tag="p"
          variant="h2Bold"
          className={styles.section3Title}
        >
          {TITLE_SECTION_3}
        </UiTypography>
        <div className={styles.section3Info}>
          <InfoDetail
            title={TITLE_INFO_LEFT}
            subtitle={SUBTITLE_INFO_LEFT}
          />
          <div className={styles.section3InfoMidle}>
            <span className={styles.section3InfoMidleLine}></span>
            <UiButton className={styles.section3InfoMidleButton}>
              <Icon name="IconRectangleSection3" />
            </UiButton>
          </div>
          <InfoDetail
            title={TITLE_INFO_RIGHT}
            subtitle={SUBTITLE_INFO_RIGHT}
          />
        </div>
      </div>
    </section>
  );
};
