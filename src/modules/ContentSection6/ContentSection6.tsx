import { useState, type FormEvent } from 'react';

import { UiButton, UiInput, UiTextarea, UiTypography } from 'shared/ui';

import { ERROR_TEXT_EMAIL, SUBMIT, TITLE_SECTION_6 } from './lib/constans';
import { EMAIL_PATTERN } from './lib/patterns';
import styles from './ContentSection6.module.scss';
import { PrivacyPolicy } from 'entities/PrivacyPolicy/PrivacyPolicy';

// TODO в тз не написано каким делать инпут, управляемым или нет, поэтому сделал неуправляемым, чтобы валидация срабатывала только при отправке, а не на каждую смену символа.

export const ContentSection6 = () => {
  const [emailError, setEmailError] = useState('');

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.target as HTMLFormElement),
    );

    if (!EMAIL_PATTERN.test(data.email.toString())) {
      setEmailError(ERROR_TEXT_EMAIL);
      console.log('ошибка');
    } else {
      setEmailError('');
      console.log(data);
    }
  };

  return (
    <section className={styles.section6}>
      <div>
        <UiTypography
          tag="p"
          variant="h2Bold"
        >
          {TITLE_SECTION_6}
        </UiTypography>
        <form
          onSubmit={onSubmit}
          className={styles.form}
        >
          <UiTextarea
            name="question"
            maxLength={240}
            className={styles.formArea}
          />

          <div className={styles.formFillInfo}>
            <UiInput
              name="email"
              type="email"
              placeholder="Введите e-mail"
              required
              error={emailError}
            />
            <PrivacyPolicy />
            <UiButton
              variant="black"
              className={styles.formButton}
              type="submit"
            >
              {SUBMIT}
            </UiButton>
          </div>
        </form>
      </div>
    </section>
  );
};
