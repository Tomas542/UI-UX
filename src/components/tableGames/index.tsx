import { TableCell } from "../tableCell"
import styles from './Table.module.css';

export const TableTops = () => {
  return (
    <div className={styles.TableCellBorder}>
      <ul role='list' className={styles.activitiesContainer}>
        <TableCell 
          img_src="https://optim.tildacdn.com/tild3162-3761-4831-a630-636661326136/-/resize/90x/-/format/webp/icons8---100.png"
          name="Веселитесь"
          description="Проведите уютный день или вечер в компании друзей за партией в любимую игру."
        />
        <TableCell 
          img_src="https://optim.tildacdn.com/tild3535-3332-4737-a261-613130656436/-/resize/90x/-/format/webp/icons8--100.png"
          name="Читайте"
          description="Огромная коллекция книг и комиксов. Разнообразные сюжеты, качественная печать и широкий выбор."
        />
        <TableCell 
          img_src="https://optim.tildacdn.com/tild6666-3765-4531-b737-346566666461/-/resize/90x/-/format/webp/icons8----100.png"
          name="Работайте"
          description="Наше кафе также подходит для работы. Розетки, высокоскоростной интернет и не только."
        />
        <TableCell 
          img_src="https://optim.tildacdn.com/tild6635-6163-4732-b361-333734623264/-/resize/90x/-/format/webp/icons8--100.png"
          name="Смотрите"
          description="Насладитесь вместе с друзьями кино или играйте в свои любимые игры на проекторе."
        />
        <TableCell 
          img_src="https://optim.tildacdn.com/tild6635-6163-4732-b361-333734623264/-/resize/90x/-/format/webp/icons8--100.png"
          name="Смотрите"
          description="Насладитесь вместе с друзьями кино или играйте в свои любимые игры на проекторе."
        />
      </ul>
    </div>
  );
}