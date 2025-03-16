import "./Savatcha.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incCart,
  decCart,
  removeCart,
  removeAllCart,
} from "../../Redux/cartSlice";

const Savatcha = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.value);

  return (
    <main>
      <div className="container">
        <div className="savatcha-page">
          {data.length === 0 ? (
            <>
              <h2>Savat bo‘sh</h2>
              <Link to="/" className="buy-link">
                🛒 Mahsulot sotib olish
              </Link>
            </>
          ) : (
            <>
              {data.map((item) => (
                <div className="savatcha-page-divs" key={item.id}>
                  <Link to={`/products/${item.id}`}>
                    <img src={item.img} alt={item.title} />
                  </Link>
                  <h2>{item.title}</h2>
                  <p>Miqdor: {item.quantity}</p>
                  <div className="savatcha-buttons">
                    <button onClick={() => dispatch(decCart(item))}>➖</button>
                    <button onClick={() => dispatch(incCart(item))}>➕</button>
                    <button onClick={() => dispatch(removeCart(item))}>
                      ❌
                    </button>
                    <button
                      className="clear-cart-btn"
                      onClick={() => dispatch(removeAllCart())}
                    >
                      🗑 Barchasini o‘chirish
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Savatcha;
