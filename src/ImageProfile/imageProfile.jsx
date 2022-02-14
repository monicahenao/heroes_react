export const ImageProfile = (props) => {
  return (
    <div className="imageProfile">
      <img
        srcSet={props.srcImage}
        className="image"
      />
      <div className="placeText">{props.placeText}</div>
    </div>
  );
};
