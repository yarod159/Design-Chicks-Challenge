import CardT from "../../../../components/CardT";
import data from "../../../../utils/characteristics.json";
import ArrowR from "../../../../assets/icon-arrow/arrow-down.svg";
import Filter from "../../../../assets/icon/filter.svg";
import "./cards.css";
import { useState } from "react";
function Cards() {

  const [selectedButton, setSelectedButton] = useState(1);

  const buttons = [1, 2, 3, 4, '...', 11];
  return (
    <div className="template-cards-container">
      <div className="template-cards-wrapper">
        <div className="template-cards-top">
          <div>Showing 20 - from 125 </div>
          <div>
            <img src={Filter} alt="" />
            <div className="template-cards-top-p">
              <small>
                Sort By <br />{" "}
              </small>
              <span>Featured</span>
            </div>
            <img src={ArrowR} alt="" />
          </div>
        </div>

        <div className="template-cards-middle">
          <div>
            {data.map((item, index) => (
              <CardT key={index} characteristics={item} />
            ))}
          </div>
        </div>

        <div className="template-cards-footer">
            <button className="template-cards-button template-cards-arrow" style={{transform: "rotate(90deg)", marginRight: "10px"}}><img src={ArrowR} alt="" /></button>
            {buttons.map((number, index) => (
                <button
                    key={index}
                    className={`template-cards-button ${selectedButton === number ? 'selected' : ''}`}
                    onClick={() => setSelectedButton(number)}
                >
                    {number}
                </button>
            ))}
            <button className="template-cards-button template-cards-arrow" style={{transform: "rotate(270deg)", marginLeft: "10px"}}><img src={ArrowR} alt="" /></button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
