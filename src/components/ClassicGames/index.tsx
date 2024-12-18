import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://www.toyway.ru/upload/iblock/17a/HASBRO%20B7512121.jpg3.jpg"
          name="Монополия"
          description="Игра, которая не нуждается в представление. Может как сплачить, так и разобщить вашу компанию."
        />
        <MenuCell 
          img_src="https://www.mosigra.ru/image/data/mosigra.product.main/559/218/DSC_7432.jpg"
          name="Мафия"
          description="Игра с огромным множеством ролей, где всё зависит от ваших наблюдательности и красноречия."
        />
      </ul>
    </div>
  );
}