import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://e2.edimdoma.ru/data/ingredients/0000/8259/8259-ed4_wide.jpg?1502378254"
          name="Кукурузные хлопья"
          description="Вкусный сухой завтрак, который вы можете съесть с молоком."
        />
        <MenuCell 
          img_src="https://dessert.ru/upload/iblock/bee/l6u5tuszxiwau0dxskl8gpxudvdi3ytv.jpg"
          name="Печенье американо"
          description="Вкуснейшнее шоколадное печенье."
        />
      </ul>
    </div>
  );
}