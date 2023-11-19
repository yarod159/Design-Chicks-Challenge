import PropTypes from "prop-types";
import Cart from "../../assets/icon/cart.svg";
function CardBottom(props) {
  return (
    <div className="container-card-bottom">
      <div className="card-bottom-price">
        <p>{props.price1}</p>
        <p>{props.price2}</p>
      </div>
      <div className="card-bottom-detail">
        <p>{props.detail}</p>
      </div>
      <div className="card-bottom-button">
        <div className="card-bottom-left">
          <button  className="first-button" >DETAILS</button>
        </div>
        <div className="card-bottom-rigth">
          <button className="bottom-second">
            <div>
            ADD
            </div>
            <div className="card-bottom-cart" >
              <img src={Cart} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

CardBottom.propTypes = {
  price1: PropTypes.string,
  price2: PropTypes.string,
  detail: PropTypes.string,
};

export default CardBottom;
