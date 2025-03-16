import "./HeaderMain.css";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <section className="headermain">
      <div id="container">
        <section className="headermain-nav-menu">
          {/* CHAP TOMON */}
          <section className="headermain-left-section">
            <section className="headermain-foydali">
              <Link className="headermain-link">0% Muddatli to‘lov</Link>
              <Link className="headermain-linkone">Chegirmalar</Link>
              <Link className="headermain-linktwo">Yutuqli o‘yinlar</Link>
            </section>

            <section className="headermain-sayt-map">
              <Link>Sayt xaritasi</Link>
            </section>
          </section>

          {/* O‘NG TOMON */}
          <section className="headermain-right-section">
            <section className="headermain-number-shop">
              <Link className="headermain-link-number">
                +998 (71) 202 202 1
              </Link>
              <Link className="headermain-link-shop">Olcha’da soting</Link>
            </section>

            <section className="headermain-langs-section">
              <Link>Ўзб</Link>
              <Link>O‘z</Link>
              <Link>Рус</Link>
            </section>
          </section>
        </section>
      </div>
    </section>
  );
};

export default HeaderMain;
