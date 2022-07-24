import React from "react";
import "./cart.css";
import { FaSearch } from "react-icons/fa";
const Cart = () => {
  const url = window.location.pathname;
  const CartSearch = () => {};
  return (
    <>
      <header className="header-cart"> My Shopping Cart</header>
      <div className="cart-main-div">
        <section className="cart-search-section">
          {/* <label>Filter</label> */}
          <input className="cart-search" type="text" placeholder="Search" />
          <button className="search-btn-cart" onClick={CartSearch}>
            Search
          </button>
        </section>
        <div className="cart-product-div">
          <div className="cart-product-img">
            <img src="./images/4.jpg" className="cart-img" />
          </div>
          <div className="cart-product-data">
            <table className="cart-product-table">
              <tr className="cart-tabel-headers">
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
              <tr className="cart-table-data">
                <td>Bed</td>
                <td>50000</td>
                <td>1</td>
              </tr>
            </table>
            <section>
              <p>Description</p>
              <p>
                this is the sample descioption of the product added to the cart
              </p>
            </section>
            <section>
              <button>Remove from Cart</button>
            </section>
          </div>
        </div>
      </div>
      <p>this is cart page</p>
      <p>{url}</p>
    </>
  );
};

export default Cart;
