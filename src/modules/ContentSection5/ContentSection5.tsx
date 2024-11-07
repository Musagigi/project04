import { UiButton, UiTypography } from 'shared/ui';

import { ListItems } from './ui/ListItems/ListItems';

import { TITLE_SECTION_5 } from './lib/constans';
import { LIST_ITEMS } from 'modules/ContentSection5/lib/constans';
import { MAKE_CALL } from 'shared/constans/common';
import styles from './ContentSection5.module.scss';

export const ContentSection5 = ({ id }: { id?: string }) => {
  return (
    <section
      id={id}
      className={styles.section5}
    >
      <div className={styles.section5Content}>
        <div className={styles.section5ContentInfo}>
          <UiTypography
            tag="p"
            variant="h2Bold"
          >
            {TITLE_SECTION_5}
          </UiTypography>
          <ListItems listItems={LIST_ITEMS} />
          <UiButton
            variant="black"
            className={styles.section5ContentInfoButton}
          >
            {MAKE_CALL}
          </UiButton>
        </div>
        <div className={styles.section5ContentImage}>
          <img
            src="src/shared/assets/images/section5.webp"
            alt="главняа страница сайта"
            className={styles.section5ContentImagePicture}
          />
        </div>
      </div>
    </section>
  );
};
