import { Header } from "../components/header";
import { Slogan } from "../components/slogan";
import { InfoSection } from "../components/infoMenu";
import DropdownTeas from "../components/dropdownMenuTeas";
import DropdownMenuSnacks from "../components/dropdownMenuSnacks";
import DropdownMenuBeer from "../components/dropdownMenuBeer";
import { Footer } from "../components/footer";

import styles from "./Home.module.css"



// import mySVG from "../../public/logo.svg"

function Menu() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.slogan}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Slogan 
            fontSize={"60px"} 
            text="приятные мелочи жизни"
          />
        </div>
        <div>
          <Slogan 
            fontSize={"40px"}
            text="которыми так просто наслаждаться"
          />
        </div>
      </div>
      <div className={styles.text}>
        <InfoSection />
        <DropdownTeas 
          label="Чаи и кофе"
          default_open={true}
        />
        <DropdownMenuSnacks 
          label="Снеки"
          default_open={true}
        />
        <DropdownMenuBeer 
          label="Пенное"
          default_open={true}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
