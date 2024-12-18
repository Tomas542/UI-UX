import { Header } from "../components/header";
import { Slogan } from "../components/slogan";
import { InfoSection } from "../components/infoRooms";
import Dropdown from "../components/dropdown";
import { Footer } from "../components/footer";

import styles from "./Home.module.css"


// import mySVG from "../../public/logo.svg"

function Games() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.slogan}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Slogan 
            fontSize={"60px"} 
            text="на любой вкус и цвет"
          />
        </div>
        <div>
          <Slogan 
            fontSize={"40px"}
            text="более 100 игр в нашей коллекци"
          />
        </div>
      </div>
      <div className={styles.text}>
        <InfoSection />
        <Dropdown 
          label="Классические игры"
        />
        <Dropdown 
          label="Похожие на мафию"
        />
        <Dropdown 
          label="Требующие воображения"
        />
        <Dropdown 
          label="На подумать"
        />
        <h2>И много много ещё..</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Games;
