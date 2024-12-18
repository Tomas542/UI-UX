import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://img.shop.rusteaco.ru/files/1/4274/27357362/original/romashkoviy-chay.jpg"
          name="Ромашковый чай"
          description="Расслабьтесь с приятным ромашковым чаем."
        />
        <MenuCell 
          img_src="https://teatrading.ru/wa-data/public/blog/img/strawberry_leaf_tea3-2.png"
          name="Клубничный чай"
          description="Почувствуйте вкус спелых ягод."
        />
        <MenuCell 
          img_src="https://img.shop.rusteaco.ru/files/1/7626/35757514/original/chay-s-chabrecom-1721814361762.jpg"
          name="Чай с чабрецом"
          description="Классический и такой знакомый для многих чай с чабрецом"
        />
      </ul>
    </div>
  );
}