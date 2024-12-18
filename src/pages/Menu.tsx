// function Menu() {
//   return (
//     <div>
//     <h1>MMM</h1>
//     </div>
//   );
// }
// export default Menu;

import React, { useEffect, useState } from 'react';
import { Button } from '../components/button';
import { Slogan } from '../components/slogan';
import { useNavigate } from 'react-router-dom';
import {InfoSection} from '../components/infoCaffe';
import {Reviews} from '../components/reviews';

function Menu() {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate('/');
  };

  const handleClickRooms = () => {
    navigate('/rooms');
  };
  
  const handleClickGames = () => {
    navigate('/games');
  };

  return (
    <div style={{ // лTODO: убрать стиль контейнера в отдельный css.
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
      backgroundColor: "#fffbe6",
      paddingTop: "50px"
    }}>
      <div style={{ // TODO: убрать стиль контейнера в отдельный css.
        position: "fixed", 
        top: 0, 
        width: "100%", 
        backgroundColor: "#E3D44C", 
        display: "flex", 
        justifyContent: "space-around", 
        padding: "10px 0", 
        zIndex: 1000 
      }}>
        <Button
          label="Главная"
          onClick={handleClickMain}
          color="dark-orange"
          size="large"
        />
        <Button
          label="Залы"
          onClick={handleClickRooms}
          color="dark-orange"
          size="large"
        />
        <Button
          label="Настолки"
          onClick={handleClickGames}
          color="dark-orange"
          size="large"
        />
      </div>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "75vh"
      }}>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Slogan 
            fontSize={"60px"} 
            text='вдвоём ещё по одной'
          />
        </div>
        <div style={{ margin: "0" }}>
          <Slogan 
            fontSize={"40px"}
            text='совмещаем приятное с приятным 🍻🃏'
          />
        </div>
      </div>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        justifyContent: "center", 
        marginTop: "50px" 
      }}>
        <InfoSection />
        <Reviews />
      </div>
    </div>
  );
}

export default Menu;
