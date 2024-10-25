import React, { useEffect, useState } from 'react';
import { Button } from '../components/button';
import { Slogan } from '../components/slogan';
import { useNavigate } from 'react-router-dom';
import {InfoSection} from '../components/info';
import {Reviews} from '../components/reviews';

function Home() {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(false);

  const handleClickRooms = () => {
    navigate('/rooms');
  };
  
  const handleClickMenu = () => {
    navigate('/menu');
  };
  
  const handleClickGames = () => {
    navigate('/games');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.2;

      if (scrollPosition > triggerPosition) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ 
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
      {showHeader && ( // TODO: убрать стиль контейнера в отдельный css.
        <div style={{ 
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
            label="Залы"
            onClick={handleClickRooms}
            color="dark-orange"
            size="large"
            style={{ fontSize: "20px", padding: "10px 20px" }} // TODO: перенести в CSS Button
          />
          <Button
            label="Меню"
            onClick={handleClickMenu}
            color="dark-orange"
            size="large"
            style={{ fontSize: "20px", padding: "10px 20px" }} // TODO: перенести в CSS Button
          />
          <Button
            label="Настолки"
            onClick={handleClickGames}
            color="dark-orange"
            size="large"
            style={{ fontSize: "20px", padding: "10px 20px" }} // TODO: перенести в CSS Button
          />
        </div>
      )}
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
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          marginTop: "20px", 
          width: "70%",
          marginBottom: "50px"
        }}>
          <Button
            label="Залы"
            onClick={handleClickRooms}
            color="orange"
            size="large"
            style={{ fontSize: "20px", padding: "15px 30px" }} // TODO: перенести в CSS Button
          />
          <Button
            label="Меню"
            onClick={handleClickMenu}
            color="orange"
            size="large"
            style={{ fontSize: "20px", padding: "15px 30px" }} // TODO: перенести в CSS Button
          />
          <Button
            label="Настолки"
            onClick={handleClickGames}
            color="orange"
            size="large"
            style={{ fontSize: "20px", padding: "15px 30px" }} // TODO: перенести в CSS Button
          />
        </div>
        <h3 style={{color:"black"}}>Кнопки работают на редирект, но других страниц нет</h3>
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

export default Home;
