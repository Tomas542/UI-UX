import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://ivandamaria.rest/images/articles/082.webp"
          name="Светлое пиво"
          description="Без ярко выраженного вкуса солода."
        />
        <MenuCell 
          img_src="https://pivoug.ru/d/55073772_2.jpg"
          name="Тёмное пиво"
          description="Следка сладковатое с приятным послевкусием."
        />
      </ul>
    </div>
  );
}