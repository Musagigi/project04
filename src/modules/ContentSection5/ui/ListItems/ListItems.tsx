import { Bulit } from 'entities/Bulit/Bulit';
import { UiTypography } from 'shared/ui';

import styles from './ListItems.module.scss';

export const ListItems = ({
  listItems,
}: Record<'listItems', Array<string>>) => {
  return (
    <ul className={styles.list}>
      {listItems.map((item, index) => (
        <li
          className={styles.listItem}
          key={index}
        >
          <div className={styles.listItemBulit}>
            <Bulit />
          </div>
          <UiTypography
            tag="p"
            variant="paragraph22Regular"
          >
            {item}
          </UiTypography>
        </li>
      ))}
    </ul>
  );
};
