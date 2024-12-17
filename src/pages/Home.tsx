import { Header } from "../components/header";
import { Slogan } from "../components/slogan";
import { Activities } from "../components/activities";
import { InfoSection } from "../components/info";
import { Reviews } from "../components/reviews";

import styles from "./Home.module.css"


// import mySVG from "../../public/logo.svg"

function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.slogan}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Slogan 
            fontSize={"60px"} 
            text="вдвоём ещё по одной"
          />
        </div>
        <div>
          <Slogan 
            fontSize={"40px"}
            text="совмещаем приятное с приятным 🍻🃏"
          />
        </div>
      </div>
      <div className={styles.text}>
        <InfoSection />
        <h2>Время препровождение</h2>
        <Activities />
        <h2>Отзывы</h2>
        <Reviews />
      </div>
    </div>
  );
}

export default Home;
