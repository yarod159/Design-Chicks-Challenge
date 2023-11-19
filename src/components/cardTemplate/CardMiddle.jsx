import PropTypes from "prop-types";

function CardMiddle(props) {
  return (
    <div className="container-cardt-middle">
      <img src={props.image} alt="card" />
      <div className="cardt-middle-title-img">
        <h2>{props.title}</h2>
        <img src={props.emblem} alt="emblem" />
      </div>
    </div>
  );
}

CardMiddle.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  emblem: PropTypes.string,
};

export default CardMiddle;
