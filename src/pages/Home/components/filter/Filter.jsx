import "./filter.css";
import Sword from "../../../../assets/icon/icon-sword.png";
import ArrowR from "../../../../assets/icon-arrow/arrow.svg";
import Magnifier from "../../../../assets/icon/magnifier.png";
import Feather from "../../../../assets/icon-arrow/feather.svg";
import Bag from "../../../../assets/icon-arrow/item-bag.svg";

function Filter() {
  return (
    <div className="filter-container">
      <div className="filter-wrapper">
        <div className="filter-title">
          <h1>Condimentum consectetur</h1>
        </div>

        <div className="filter-input">
          <div className="filter-input-game flex-row filter-arrow ">
           
            <img src={Sword} alt="" />
            <input type="text" placeholder="Select a game" />
            <img src={ArrowR} alt="" />
          </div>

          <div className="filter-input-search  flex-row ">
            <img src={Magnifier} alt="" />
            <input type="text" placeholder="search" />
          </div>

          <div className="filter-Price-Type  flex-row  filter-arrow ">
            <div className="filter-bag-price filter-br filter-arrow  flex-row ">
              <img src={Bag} alt="" />
              <div>
                <span> <small style={{color:"#9699A6"}}>Price </small>  <br/></span>
                <span>All</span>
              </div>
              <img src={ArrowR} style={{width:"10px"}} alt="" />
            </div>

            <div className="filter-bag-price  filter-arrow flex-row">
              <img src={Feather} alt="" />
              <div>
                <span> <small style={{color:"#9699A6"}}>Item Type</small> <br/></span>
                <span>All</span>
              </div>
              <img src={ArrowR} alt="" style={{width:"10px"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
