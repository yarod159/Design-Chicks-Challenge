import PropTypes from "prop-types";
import CardTop from "./cardTemplate/CardTop";
import CardMiddle from "./cardTemplate/CardMiddle";
import CardBottom from "./cardTemplate/CardBottom";
import "./cardTemplate/cardt.css";
function CardT(props) {
  console.log("CardT is rendering", props);
  if (!props.characteristics) {
    return null;
  }

  return (
    <div className="cardTemplate-container">
       
      <CardTop
        onSale={props.characteristics["on-sale"]}
        stock={props.characteristics.stock}
      />
      <CardMiddle
        image={props.characteristics.image}
        title={props.characteristics.title}
        emblem={props.characteristics.emblem}
      />
      <CardBottom
        price1={props.characteristics.price1}
        price2={props.characteristics.price2}
        detail={props.characteristics.detail}
      />
      
    </div>
  );
}

CardT.propTypes = {
  characteristics: PropTypes.shape({
    "on-sale": PropTypes.string,
    stock: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    emblem: PropTypes.string,
    price1: PropTypes.string,
    price2: PropTypes.string,
    detail: PropTypes.string,
  }),
};

export default CardT;
