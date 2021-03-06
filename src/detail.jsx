import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {editHeroe,deleteHeroe } from './features/heroe/heroeSlice';



export const Detail = (props) => {
  const heroe = useSelector((state) => state.heroe.heroes);

  const dispatch = useDispatch();


  const { heroeId } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const goToEdit = () => {
    setIsEditing(true);
  };
  const [heroeCall, setHeroeCall] = useState(heroe[parseInt(heroeId)]);

  const save = () => {
    setIsEditing(false);
    dispatch(editHeroe({index: heroeId, heroe: heroeCall}));
  };

  const deleteHeroes = () => {
    dispatch(deleteHeroe({index: heroeId}));
    goToMain();

  };


  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/");
  };

  const handleChangeNickname = (event) => {
    const newHeroe = {
      ...heroeCall,
      _nickname: event.target.value,
    };
    setHeroeCall(newHeroe);
  };

  const handleChangeName = (event) => {
    const newHeroe = {
      ...heroeCall,
      _name: event.target.value,
    };

    setHeroeCall(newHeroe);
  };

  return (
    <div className="case">
      <div className="choice">
        <span>
          {isEditing ? (
            <button onClick={save} >Guardar</button>
          ) : (
            <>
              <button onClick={goToEdit}>Editar</button>
              <button onClick={deleteHeroes}>Eliminar</button>
              <button className="choice button" onClick={goToMain}>
                Regresar
              </button>
            </>
          )}
        </span>
      </div>
      <div className="detail">
        <img src={heroeCall._picture} className="picture" alt="heroe" />
        <div className="detailText">
          {isEditing ? (
            <input
              name="_nickname"
              value={heroeCall._nickname}
              onChange={handleChangeNickname}
              className="input"
            />
          ) : (
            <h1>{heroeCall._nickname}</h1>
          )}
          <span>
            <div className="name">
              {isEditing ? (
                <input
                  name="_name"
                  value={heroeCall._name}
                  onChange={handleChangeName}
                  className="input"
                />
              ) : (
                <span>{heroeCall._name}</span>
              )}
            </div>
            <div className="stature">Estatura: {heroeCall._height} mt</div>
          </span>
        </div>
      </div>
    </div>
  );
};
