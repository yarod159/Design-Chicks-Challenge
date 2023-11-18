import "./navbar.css";
import LogoCG from "../../../../assets/logo/chicks-logo.svg";
import Arrow from "../../../../assets/icon-arrow/arrow-down.svg";
import Cart from "../../../../assets/icon/cart.svg";
import Profile from "../../../../assets/icon/profile.png";
function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-wrapper  flex-row">
        <div className="nav-logo">
          <img src={LogoCG} alt="" />
        </div>
        <div className="nav-items flex-row ">
          <div className="nav-item-left ">
            <ul className=" flex-row">
              <li>
                <a href="/">CURRENCY</a>
                
                  {" "}
                  <span>
                  <img src={Arrow} alt="" />
                  </span>
              </li>
              <li>
                <a
                  href="/
                "
                >
                  ITEMS
                </a>
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </li>
              <li>
                <a href="/">ACCOUNTS</a>
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </li>
              <li>
                <a href="/">SERVICES</a>
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </li>
              <li>
                <a href="/">SWAP</a>
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </li>
              <li>
                <a href="/contacto">SELL</a>
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </li>
            </ul>
          </div>
          <div className="nav-item-right ">
            <ul className="flex-row">
              <li>
                <a href="/USD">USD</a>
                <span>
                  {" "}
                  <img src={Arrow} alt="" />
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  <img src={Cart} alt="" />
                </span>
                <a href="/">CART(6)</a>
              </li>
              <li>
                <button>
                  SIGN IN{" "}
                  <span className="icon-profile">
                    <span>
                      {" "}
                      <img src={Profile} alt="" />
                    </span>
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
