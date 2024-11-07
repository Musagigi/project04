import { useState } from 'react';

import { ToggleGroupButton } from 'entities/ToggleGroupButton/ToggleGroupButton';
import { UiTypography } from 'shared/ui';

import { INFO_FOR_TOGGLE_BUTTON, TITLE_SECTION_2 } from './lib/constans';
import styles from './ContentSection2.module.scss';

export const ContentSection2 = () => {
  const [buttons, setButtons] = useState(INFO_FOR_TOGGLE_BUTTON);

  const handleButtonClick = (value: string) => {
    setButtons((prevButton) => {
      return prevButton.map((button) => {
        return {
          ...button,
          isActive: button.value === value,
        };
      });
    });
  };

  return (
    <section className={styles.section2}>
      <UiTypography
        tag="p"
        variant="h2Bold"
        className={styles.section2Title}
      >
        {TITLE_SECTION_2}
      </UiTypography>
      <div className={styles.section2Toggle}>
        <ToggleGroupButton
          buttons={buttons}
          handleButtonClick={handleButtonClick}
        />
        <UiTypography
          tag="p"
          variant="paragraph22Regular"
          className={styles.section2ToggleText}
        >
          {buttons.find((button) => button.isActive)?.text}
        </UiTypography>
      </div>
    </section>
  );
};
