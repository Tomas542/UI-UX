import { Header } from "../components/header";
import { Slogan } from "../components/slogan";
import { InfoSection } from "../components/infoRooms";
import { RoomImages } from "../components/roomImages";
import { RoomImages2 } from "../components/foo2";
import { RoomImages3 } from "../components/foo3";
import { Footer } from "../components/footer";

import styles from "./Home.module.css"


// import mySVG from "../../public/logo.svg"

function Rooms() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.slogan}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Slogan 
            fontSize={"60px"} 
            text="просторные и уютные залы"
          />
        </div>
        <div>
          <Slogan 
            fontSize={"40px"}
            text="для больших и маленьких компаний"
          />
        </div>
      </div>
      <div className={styles.text}>
        <InfoSection />
        <h2>Залы</h2>
        <RoomImages />
        <RoomImages2 />
        <RoomImages3 />
      </div>
      <Footer />
    </div>
  );
}

export default Rooms;
