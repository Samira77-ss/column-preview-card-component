import "./Card.css";
import iconLuxury from "./image/icon-luxury.svg";
import iconSedans from "./image/icon-sedans.svg";
import iconSuvs from "./image/icon-suvs.svg";
function Card() {
  return (
    <div className="card">
      <div className="sedans">
        <div className="content">
          {" "}
          <img src={iconSedans} alt="icon" />
          <h2>SEDANS</h2>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
        </div>
        <button className="firstButton">Learn More</button>
      </div>
      <div className="suvs">
        <div className="content">
          {" "}
          <img src={iconSuvs} alt="icon" />
          <h2>SUVS</h2>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
        </div>
        <button className="secondButton">Learn More</button>
      </div>
      <div className="luxury">
        <div className="content">
          {" "}
          <img src={iconLuxury} alt="icon" />
          <h2>LUXURY</h2>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
        </div>
        <button className="thirdButton">Learn More</button>
      </div>
    </div>
  );
}

export default Card;
