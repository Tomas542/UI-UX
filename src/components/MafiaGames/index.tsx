import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://c.dns-shop.ru/thumb/st4/fit/760/600/aff760c323ab06ba4a0dde2cd10cce63/q93_2aed44b57bedc87a32aeea41be298da341488ec64120fce3ce6947fe448ad0d1.jpg"
          name="Гномы-вредители"
          description="Игроки делятся на две команды, и пока обычные гномы пытаются докопать до золота, вредители стараются им помешать."
        />
        <MenuCell 
          img_src="https://www.igroved.ru/db/games/images/39/2239/igroved_bang-the-duel_03.jpg"
          name="Бэнг"
          description="Бандиты стараются убить шерифа, пока он его помощники стараются помещать бандитам."
        />
      </ul>
    </div>
  );
}