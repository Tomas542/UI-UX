import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://pronastolki.wordpress.com/wp-content/uploads/2019/03/dsc08868.jpg?w=656"
          name="Элементарно"
          description="Серия детективных историй, где ваша цель понять мотивы и восстановить ход преступления."
        />
        <MenuCell 
          img_src="https://www.mosigra.ru/image/cache/data/mosigra.product.main/549/230/DSC_3315-1024x1024-wm.webp"
          name="Cluedo"
          description="Кто-то где-то чем-то совершил преступление. Цель игрока - выяснить детали раньше других."
        />
      </ul>
    </div>
  );
}