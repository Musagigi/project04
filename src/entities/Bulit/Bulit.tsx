import { Icon } from 'shared/ui';

import styles from './Bulit.module.scss';

export const Bulit = () => {
  return (
    <div className={styles.bulit}>
      <Icon
        name="IconArrowRightDiagonal"
        width={12}
        height={12}
      />
    </div>
  );
};
