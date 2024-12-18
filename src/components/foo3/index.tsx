import { useState } from 'react';
import styles from './Room.module.css';

const cinema = [
  {
    img_src: "https://static.tildacdn.com/tild3563-3665-4530-b366-323561643833/IMG_4536_enfuse.jpg",
  },
  {
    img_src: "https://static.tildacdn.com/tild3532-6466-4663-a365-306262323135/IMG_4542_enfuse.jpg",
  },
  {
    img_src: "https://static.tildacdn.com/tild3236-3030-4337-b134-353938346431/IMG_4548_enfuse.jpg",
  },
  {
    img_src: "https://static.tildacdn.com/tild3737-3830-4539-b337-656638366639/IMG_4554_enfuse.jpg",
  }
];

export const RoomImages3 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cinema.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cinema.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.reviewsContainer}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrev}>‹</button>
      <div className={styles.reviewCard}>
        <img src={cinema[currentIndex].img_src} width={650} height={350}></img>
        <p>Кинозал</p>
      </div>
      <button className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>›</button>
    </div>
  );
}

