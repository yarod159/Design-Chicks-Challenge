import "./payments.css";
import Visa from "../../../../assets/method-payment/visa.png";
import America from "../../../../assets/method-payment/america.png";
import Bch from "../../../../assets/method-payment/bch.png";
import Etc from "../../../../assets/method-payment/eth.png";
import Ltc from "../../../../assets/method-payment/ltc.png";
import Mastercard from "../../../../assets/method-payment/mastercard.png";
import Skrill from "../../../../assets/method-payment/skrill.png";
import Btc from "../../../../assets/method-payment/btc.png";

function Payments() {
  return (
    <div className="container-payments">
      <div className="wrapper-payments">
        
          <div className="payments-banks">
            <img  src={Visa} alt="" />
            <img  src={Mastercard} alt="" />
            <img  src={America} alt="" />
            <img  src={Skrill} alt="" />
          </div>
          <div className="payments-crytos">
            <img src={Bch} alt="" />
            <img
             style={{height:"30px",width:"20px"}}
              src={Etc}
              alt=""
              
            />
            <img   src={Btc} alt="" />
            <img 
          
            src={Ltc} alt="" />
            <p >
              <a href=""> and 50+ more</a>
            </p>
          </div>
       
      </div>
    </div>
  );
}

export default Payments;
