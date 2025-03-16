import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { BiBarChart } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

const HeaderBottom = () => {
  return (
    <div id="container">
      <section className="headerbottom">
        <section className="logo-katalog">
          <h1>
            <Link to="/">olcha</Link>
          </h1>
          <button>
            <LuMenu className="headerbottom-icon" />
            <span className="h-b-katalog">Katalog</span>
          </button>
        </section>

        <section className="headerbottom-input">
          <input type="text" placeholder="Katalog bo'yicha qidirish" />
          <button>
            <FiSearch className="headerbottom-input-icon" />
          </button>
        </section>

        <nav>
          <ul>
            <li>
              <Link to="/Taqqoslash">
                <BiBarChart className="headerbottom-icon" />
                <span>Taqqoslash</span>
              </Link>
            </li>
            <li>
              <Link to="/Sevimlilar">
                <FaRegHeart className="headerbottom-icon" />
                <span>Sevimlilar</span>
              </Link>
            </li>
            <li>
              <Link to="/Savatcha">
                <PiShoppingCartSimpleBold className="headerbottom-icon" />
                <span>Savatcha</span>
              </Link>
            </li>
            <li>
              <Link to="/Kirish">
                <AiOutlineUser className="headerbottom-icon" />
                <span>Kirish</span>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default HeaderBottom;
