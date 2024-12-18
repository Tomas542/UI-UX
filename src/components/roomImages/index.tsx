import { useState } from 'react';
import styles from './Room.module.css';

const reviews = [
  {
    img_src: "https://static.tildacdn.com/tild6562-3235-4661-a365-343162313539/IMG_7662_enfuse.jpg",
  },
  {
    img_src: "https://optim.tildacdn.com/tild6133-6564-4733-b764-356334626565/-/cover/160x160/center/center/-/format/webp/IMG_7683_enfuse.jpg",
  },
  
];

export const RoomImages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.reviewsContainer}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={handlePrev}>‹</button>
      <div className={styles.reviewCard}>
        <img src={reviews[currentIndex].img_src} width={650} height={350}></img>
        <p>База</p>
      </div>
      
      <button className={`${styles.arrow} ${styles.right}`} onClick={handleNext}>›</button>
    </div>
  );
}

