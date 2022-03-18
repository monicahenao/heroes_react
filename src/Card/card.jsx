import { ImageProfile } from "../ImageProfile/imageProfile";
import { TitleTex } from "../TitleTex/tilteTex";
import {  useNavigate } from "react-router-dom";


export const Card = (props) => {
  const navigate = useNavigate();

  const heroe = props.heroe;
  const goToDetail = ()=> {
    navigate('/detail/'+ props.position);
  }
  return (
    <div className="card">
      <button className="button-card" onClick={goToDetail} >
        <ImageProfile
          srcImage={heroe._picture}
          placeText={props.position + 1}
        ></ImageProfile>
        <TitleTex
          nickName={heroe._nickname}
          name={heroe._name}
          height={heroe._height}
        ></TitleTex>
      </button>
    </div>
  );
};
