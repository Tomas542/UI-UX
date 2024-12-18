import { MenuCell } from "../menuCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <MenuCell 
          img_src="https://static.insales-cdn.com/files/1/3195/5737595/original/imaginarium-2.jpg"
          name="Имаджинариум"
          description="Игроки по очереди загадвают ассоциации на свои карточки и стараются отгадать их."
        />
        <MenuCell 
          img_src="https://www.researchgate.net/publication/332350197/figure/fig1/AS:746491564027914@1554988866561/Codenames-The-game-kit-and-Grid-arrangement.jpg"
          name="Codenames"
          description="Пока два капитана загадывают ассоциации, члены их команд пытаются понять, что вообще капитан имел в виду."
        />
      </ul>
    </div>
  );
}