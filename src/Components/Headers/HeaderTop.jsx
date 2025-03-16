import "./HeaderTop.css";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div id="container">
      <picture className="headertop-figure">
        <source
          srcSet="https://olcha.uz/uploads/advertising/images/top/7xlobVcBgEnWvETyrySM2DwRBppXsL9iqn0ps8Bc.jpg"
          type="image/jpeg"
        />
        <Link to="/">
          <img
            src="https://olcha.uz/uploads/advertising/images/top/7xlobVcBgEnWvETyrySM2DwRBppXsL9iqn0ps8Bc.jpg"
            alt="OLCHA reklama banneri - Eng so‘ngi aksiyalar"
            width="100%"
            loading="lazy"
          />
        </Link>
      </picture>
    </div>
  );
};

export default HeaderTop;
