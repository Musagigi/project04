import { UiCheckbox, UiLabel, UiTypography } from 'shared/ui';

import styles from './PrivacyPolicy.module.scss';

export const PrivacyPolicy = () => {
  return (
    <fieldset className={styles.privacy}>
      <UiCheckbox
        id="section6confirm"
        name="confirm"
        required
        className={styles.privacyBox}
      />

      <UiLabel
        htmlFor="section6confirm"
        className={styles.privacyLabel}
      >
        <UiTypography>
          Я ознакомлен(а) c{' '}
          <span style={{ textDecoration: 'underline' }}>
            политикой конфиденциальности
          </span>{' '}
          и согласен(на) на обработку{' '}
          <span style={{ textDecoration: 'underline' }}>
            персональных данных
          </span>
          .
        </UiTypography>
      </UiLabel>
    </fieldset>
  );
};
