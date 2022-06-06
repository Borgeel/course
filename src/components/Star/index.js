import StarEmpty from "../../assets/StarEmpty.png";
import StarFilled from "../../assets/StarFilled.png";

const Star = (props) => {
  let starIcon = props.isFilled ? StarFilled : StarEmpty;

  return (
    <img
      onClick={props.handleClick}
      className="star"
      src={starIcon}
      alt="star"
    />
  );
};

export default Star;
