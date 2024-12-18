import { Header } from "../components/header";
import { Slogan } from "../components/slogan";
import { InfoSection } from "../components/infoRooms";
import DropdownClassic from "../components/dropdownGamesClassic";
import DropdownMafia from "../components/dropdownGamesMafia";
import DropdownImagination from "../components/dropdownGamesImagination";
import DropdownThinking from "../components/dropdownGamesThinking";
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
        <DropdownClassic 
          label="Классические игры"
          default_open={false}
        />
        <DropdownMafia 
          label="Похожие на мафию"
          default_open={false}
        />
        <DropdownImagination 
          label="Требующие воображения"
          default_open={false}
        />
        <DropdownThinking
          label="На подумать"
          default_open={false}
        />
        <h2>И много много ещё...</h2>
      </div>
      <Footer />
    </div>
  );
}

export default Games;
