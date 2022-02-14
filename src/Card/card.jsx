import { ImageProfile } from "../ImageProfile/imageProfile";
import { TitleTex } from "../TitleTex/tilteTex";
export const Card = (props) => {
  const heroe  = props.heroe;
  return (
    <div className="card">
      <ImageProfile srcImage={heroe._picture} placeText={heroe._position} ></ImageProfile>
      <TitleTex nickName={heroe._nickname} name={heroe._name} height={heroe._height} ></TitleTex>
    </div>
  );
};
