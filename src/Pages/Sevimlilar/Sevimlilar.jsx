import "./Sevimlilar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromLikes } from "../../Redux/likeSlice";

const Sevimlilar = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likes);

  return (
    <main>
      <div id="container">
        <div className="sevimlilar-page">
          <h1>Saralangan Mahsulotlar</h1>
          {likedItems.length === 0 ? (
            <Link to="/">Mahsulotlardan tanlab qo&apos;yish</Link>
          ) : (
            <div className="olcha-products">
              {likedItems.map((item) => (
                <div key={item.id} className="product-card">
                  <img src={item.img} alt={item.heading} />
                  <h2>{item.heading}</h2>
                  <p>{item.money}</p>
                  <button onClick={() => dispatch(removeFromLikes(item))}>
                    O‘chirish
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Sevimlilar;
