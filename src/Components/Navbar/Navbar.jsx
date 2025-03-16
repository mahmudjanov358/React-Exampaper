import "./Navbar.css";
import { Link } from "react-router-dom";

const navImages = [
  {
    id: 1,
    img: "https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/X2ckhhQIq86ZuWGBEjv0Q4zWoCWENIJvZ4szw91JMXJKrWkYqWAEOprqdigy.jpg",
    alt: "Reklama banner 1",
  },
  {
    id: 2,
    img: "https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/XxKCcjtNNbvkbKgtil9FcIgxTg0qHY7cKBx942ZbNgG3L1fAbayWXzLZV1F6.jpg",
    alt: "Reklama banner 2",
  },
  {
    id: 3,
    img: "https://olcha.uz/image/460x152/homePage/cdn_1/2025-03-04/Z7IPjvspAgfMyJJDZ5PF5EtsnV7Or0xwkymSFsjEOVi4E6rP0QTlWMR2uXlG.jpg",
    alt: "Reklama banner 3",
  },
];

const Navbar = () => {
  return (
    <div id="container">
      <section className="navbar">
        {navImages.map((item) => (
          <Link key={item.id} to="/">
            <img src={item.img} alt={item.alt} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Navbar;
