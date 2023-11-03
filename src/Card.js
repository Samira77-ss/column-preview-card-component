import "./Card.css";
import iconLuxury from "./image/icon-luxury.svg";
import iconSedans from "./image/icon-sedans.svg";
import iconSuvs from "./image/icon-suvs.svg";
function Card() {
  return (
    <div className="container">
      <div className="content-section">
        <div className="card">
          <img src={iconSedans} alt="icon" width={50} />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="btn btn primary">Learn More</button>
        </div>
        <div className="card">
          <img src={iconSuvs} alt="icon" width={50} />
          <h1>SUVS</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button className="btn btn primary">Learn More</button>
        </div>
        <div className="card">
          <img src={iconLuxury} alt="icon" width={50} />
          <h1>LUXURY</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="btn btn primary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
