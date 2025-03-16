import "./OlchaProduct.css";
import { Link } from "react-router-dom";
import { OLCHADATA } from "../../Mock/OlchaProduct.js";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { BiBarChart } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikes, addToLikes } from "../../Redux/likeSlice.js";
import { incCart } from "../../Redux/cartSlice.js";

const OlchaProduct = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likes);

  return (
    <div id="container">
      <div className="olcha-product">
        {OLCHADATA.map((item) => {
          const isLiked = likedItems.some((el) => el.id === item.id);

          return (
            <div className="olcha-product-card" key={item.id}>
              <div className="olcha-p-card-img">
                <div className="product-icons">
                  <button className="chart-icon">
                    <BiBarChart />
                  </button>
                  <button
                    onClick={() =>
                      dispatch(
                        isLiked ? removeFromLikes(item) : addToLikes(item)
                      )
                    }
                    className="heart-button"
                  >
                    <AiOutlineHeart
                      className={`heart-icon ${isLiked ? "liked" : ""}`}
                    />
                  </button>
                </div>
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={item.heading}
                  />
                </Link>
              </div>

              <h2>{item.heading}</h2>

              <p className="olcha-product-paragraph">
                <span>{item.money}</span>
                <del>{item.delmoney}</del>
              </p>

              <p className="monthmoney">{item.monthmoney}</p>

              <div className="olcha-product-btns">
                <button
                  className="olcha-p-btn1"
                  onClick={() => dispatch(incCart(item))}
                >
                  <PiShoppingCartSimpleBold />
                </button>
                <button className="olcha-p-btn2">Muddatli to&apos;lov</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OlchaProduct;
