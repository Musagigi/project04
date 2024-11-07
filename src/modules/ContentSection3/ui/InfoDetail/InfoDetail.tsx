import { Bulit } from 'entities/Bulit/Bulit';
import { UiTypography } from 'shared/ui';

import styles from './InfoDetail.module.scss';

type TInfoDetailProps = {
  title: string;
  subtitle: string;
};

export const InfoDetail = ({ title, subtitle }: TInfoDetailProps) => {
  return (
    <div className={styles.infoDetail}>
      <div className={styles.infoDetailBulit}>
        <Bulit />
      </div>
      <UiTypography
        tag="h3"
        variant="h3Bold"
        className={styles.infoDetailTitle}
      >
        {title}
      </UiTypography>
      <UiTypography
        tag="p"
        variant="paragraph18Regular"
      >
        {subtitle}
      </UiTypography>
    </div>
  );
};
