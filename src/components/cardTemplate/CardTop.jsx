import ArrowR from "../../assets/icon-arrow/arrow.svg";
import PropTypes from "prop-types";
import "./cardt.css";
function CardTop(props) {
  return (
    <div className="container-cardt">
      <div className="cardtop-on">
        <div className="cardtop-on-intern">
        {props.onSale && <span className="cardtop-circle"></span>}
          <span className="onsale">{props.onSale}</span>
        </div>
        <p className="stock">{props.stock}</p>
      </div>

      <div className="cardtop-quantity">
        <span>1</span>
        <div className="cardtop-arrow">
          <img src={ArrowR} alt="" />   
          <img src={ArrowR} alt="" />
        </div>
      </div>
    </div>
  );
}

CardTop.propTypes = {
  onSale: PropTypes.string,
  stock: PropTypes.string,
};

export default CardTop;
