import { Card } from "../Card/card";
import { useState, useEffect } from "react";

export const Frame = () => {
  const [heroe, setHeroe] = useState([]);

  useEffect(() => {
    fetch("https://udem.herokuapp.com/heroes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((heroes) => {
        setHeroe(heroes);
      });
  }, []);

  return (
    <div className="frame">
      {heroe.map ((h, index)=> <Card  position={index+1}  key={index} heroe={{ _picture: h._picture, _position: index+3}}></Card>)}
    
    </div>
  );
};

