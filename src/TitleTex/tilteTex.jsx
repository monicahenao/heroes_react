export const TitleTex = (props) => {
    return <div className="titleText">
        <div className="titleText">
          <h1>{props.nickName}</h1>
          <span
            >{props.name}
            <br />
            Estatura {props.height} mt
          </span>
        </div>
    </div>
}
