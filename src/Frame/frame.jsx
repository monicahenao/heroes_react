import { Card } from "../Card/card";
// import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Frame = () => {

const heroe = useSelector ((state) => state.heroe.heroes)



  /*const [heroe, setHeroe] = useState([]);

  useEffect(() => {
    fetch("https://udem.herokuapp.com/heroes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((heroes) => {
        setHeroe(heroes);
      });
  }, []);*/

  return (
    
    <div className="frame">
    
      {heroe.map ((h, index)=> <Card  position={index+1}  key={index} heroe={h}></Card>)}
    
    </div>
  );
};

