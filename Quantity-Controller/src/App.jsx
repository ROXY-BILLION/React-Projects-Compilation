import SmartWatch from "./assets/smartwatch.jpeg";
import { useState } from "react";

function App() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="product-page">

      <div className="product-card">

        <div className="product-image">
          <span>NEW</span>

          <img
            src={SmartWatch}
            alt="Smart Watch"
          />
        </div>


        <div className="product-info">

          <p>SMART WATCH</p>

          <h1>Nova X1</h1>

          <p>
            Premium smartwatch designed for
            modern everyday life.
          </p>

          <h2>$120.00</h2>


          <div className="quantity">

             <button
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>

            <span>{quantity}</span>

            <button
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </button>

          </div>


          <button className="cart-button">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;