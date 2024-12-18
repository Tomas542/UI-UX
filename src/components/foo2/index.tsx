import { useState } from 'react';
import styles from './Room.module.css';

const playing = [
  {
    img_src: "https://static.tildacdn.com/tild3132-3161-4333-b231-333762633966/IMG_7572_enfuse.jpg",
  },
  {
    img_src: "https://static.tildacdn.com/tild3565-6665-4265-b432-613235636139/IMG_7581_enfuse.jpg",
  },
  {
    img_src: "https://static.tildacdn.com/tild3765-6563-4861-a664-363535643364/IMG_7587_enfuse.jpg",
  },
  {
    img_src: "https://static.tildacdn.com/tild3061-3564-4364-a265-376235653838/IMG_7575_enfuse.jpg",
  }
];

export const RoomImages2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? playing.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === playing.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.reviewsContainer}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrev}>‹</button>
      <div className={styles.reviewCard}>
        <img src={playing[currentIndex].img_src} width={650} height={350}></img>
        <p>Игровая</p>
      </div>
      <button className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>›</button>
    </div>
  );
}

