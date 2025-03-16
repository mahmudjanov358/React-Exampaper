import "./Swipers.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2024-05-27/k7X3JwefY7NM2SLThBllXJK0WwjZZiMX0TTJel9mUvksAhtLyNCF93MvgYpQ.jpg",
    alt: "Olcha.uz mahsulotlari",
  },
  {
    id: 2,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-03-10/ZTfR73m0qqmKibcqzk27y3fN0fxbfDjKa39RQjIFHDZdltPGOieMXtLXiabF.jpg",
    alt: "Chegirmalar 2025",
  },
  {
    id: 3,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-25/RTwKONMCQu5zP6tKtT0r08AKFjmwhuQTpD0bk2NaXrYFp15F2iPMggV7Ow58.jpg",
    alt: "Yangi kolleksiya",
  },
  {
    id: 4,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-01-27/dSTTzYxhmrx6Bit1f383FaiXQEDa8PLX5SNdYajZ0Z2215stK3xwuokyFgdx.jpg",
    alt: "Elektronika maxsulotlari",
  },
  {
    id: 5,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/4szwZXJCcRslBrbsUxnjChu19GobXO2qos9CQ42YD0YYBvWYcDGO8AQAkt2N.jpg",
    alt: "Smartfonlar va Gadjetlar",
  },
  {
    id: 6,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/60kvQf1fj2xSdapH6aHaCcT1PBEWqsq0iyHohrQlSeKn1SKjZQGWOXIwc3Gc.jpg",
    alt: "Maishiy texnikalar",
  },
  {
    id: 7,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/kpYdIWB7puYSmDsEXQNdHxL9sN51pLeGuBlc2K4tTVapDm07JYU2cpN0vehR.jpg",
    alt: "Noutbuk va kompyuterlar",
  },
  {
    id: 8,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/hPZ21KpqZVfQvNNqYdWdY3zprjMFfIUsL9YuhDmTZJefelzjxdzjIKntDHum.jpg",
    alt: "Aksessuarlar va moda",
  },
  {
    id: 9,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/X67IFeWIUVCgKMgNaV6tIyyMIECqnIXy1p25jVpbUB7YEGtGdZbqtZBT4UiU.jpg",
    alt: "Sport va sog'liq",
  },
  {
    id: 10,
    img: "https://olcha.uz/image/original/sliders/ru/cdn_1/2025-02-07/PGIN7c8WkYzrmOVb5D1IWTB15tHH3xsYmjok8txd4XRLoCV9HU333bZoV93L.jpg",
    alt: "Bolalar o'yinchoqlari",
  },
];

const Swipers = () => {
  return (
    <div id="container">
      <div className="swipers">
        <Swiper
          className="swipers-swipertag"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="swipers-stag-sslide">
              <Link>
                <img src={slide.img} alt={slide.alt} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Swipers;
