import React, { useContext, useEffect, useState } from "react";
import "../Styles/Cart.css";
import { NavLink, useNavigate } from "react-router-dom";
import myntralogo from "../Assets/myntra.png";
import { MyntraContext } from "./Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import api from "./Config/APIConfig";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { state } = useContext(MyntraContext);
  const route = useNavigate();

  useEffect(() => {
    if (state?.currentuser?.role === "Seller") {
      route("/");
    }
  }, [state?.currentuser]);

  useEffect(() => {
    async function getCartProucts() {
      try {
        const token = JSON.parse(localStorage.getItem("myntraToken"));
        const response = await api.post(
          "/get-cart-products",
          { token }
        );

        if (response.data.success) {
          setCartItem(response.data.product);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getCartProucts();
  }, []);

  useEffect(() => {
    if (cartItem?.length) {
      let sum = 0;
      for (let i = 0; i < cartItem.length; i++) {
        sum += parseInt(cartItem[i].price);
      }
      setTotalPrice(sum);
    }
  }, [cartItem]);

  const removeSingleProduct = async (productId) => {
    try {
      const token = JSON.parse(localStorage.getItem("myntraToken"));

      const response = await api.delete(
        "/delete-cart-product",
        {
          productId,
          token,
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setCartItem(response.data.products);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const placeOrder = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("myntraToken"));

      const response = await api.post("/buyproduct", {
        token,
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setCartItem([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id="navbarCart">
        <div id="logo">
          <NavLink to="/">
            <img src={myntralogo} alt="" />
          </NavLink>
        </div>
        <div id="procedure">
          <p>BAG</p>
          <p>------------- ADDRESS --------------</p>
          <p>PAYMENT</p>
        </div>
        <div id="payment-secure">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
          />
          <p>100% Secure</p>
        </div>
      </div>

      {cartItem.length ? (
        <div id="cartbody">
          <div id="cart-main-section">
            <div id="left-section">
              <div id="left-1">
                <p>Check delivery time & services</p>
                <button>ENTER PIN CODE</button>
              </div>
              <div id="left-2">
                <p>Available Offers</p>
                <p>
                  10% instant Discount on Kotak Credit and Debit card on a min
                  spen Rs 4,000 TCA
                </p>

                <p>Show More</p>
              </div>

              <div id="left-3"></div>
              {cartItem.length > 0 &&
                cartItem.map((item) => (
                  <div id="left-4" key={item._id}>
                    <i
                      onClick={() => removeSingleProduct(item._id)}
                      className="fa-solid fa-xmark fa-xl"
                    ></i>
                    <div id="cart-img">
                      <img src={item.image} alt="" />
                    </div>
                    <div id="cart-details">
                      <div className="detail-desc">
                        <h4>{item.title}</h4>
                        <p>{item.prodBrand}</p>
                        <p>{item.prodTitle}</p>
                      </div>

                      <div id="qty">
                        <p>Size: XXL</p>
                        <p>Qty: 1</p>
                      </div>
                      <div className="detail-desc">
                        <p>
                          <b> Rs {item.price}</b>
                          <span> {item.prodOffer}% OFF </span>
                        </p>
                        <p>
                          <b>14 days </b>
                          <span> return available</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div id="right-section">
              <div id="right-main">
                <h5>Coupons</h5>

                <div id="right-top">
                  <div id="right-top-1">
                    <i
                      className="fa-solid fa-tag fa-lg"
                      style={{ color: "#a0a2a7" }}
                    ></i>
                    <h4>Apply Coupons</h4>
                  </div>
                  <button>Apply</button>
                </div>
              </div>

              <div id="right-2">
                <p>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</p>

                <div id="check-support">
                  <input type="checkbox" />
                  <p>Support Us</p>
                </div>

                <div id="rs-container">
                  <div className="rs">₹10</div>
                  <div className="rs">₹40</div>
                  <div className="rs">₹100</div>
                </div>

                <p style={{ color: "rgb(241, 85, 85)" }}>Know More</p>
              </div>

              <div id="right-3">
                <h4>Price Details (1 item)</h4>

                <div id="final-price">
                  <div>
                    <p>Total Mrp</p>
                    <p>Discount on Mrp</p>
                    <p>Coupon Discount</p>
                    <p>
                      Convenience Fee
                      <span style={{ color: "red", fontWeight: "bold" }}>
                        &nbsp; Know More
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>Rs {totalPrice}</p>
                    <p style={{ color: "green" }}>
                      -Rs {totalPrice + totalPrice}
                    </p>
                    <p style={{ color: "red" }}>Apply Couppon</p>
                    <p>
                      Rs 99
                      <span style={{ color: "rgb(12, 177, 12)" }}> FREE</span>
                    </p>
                  </div>
                </div>

                <div id="total-price">
                  <h4>Total Amount</h4>
                  <h4>Rs. {totalPrice}</h4>
                </div>

                <div id="order-btn">
                  <button onClick={placeOrder}>PLACE ORDER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Your Cart is Empty</h2>
          <button
            onClick={() => route("/allproducts")}
            style={{
              width: "25%",
              height: "45px",
              marginTop: "2%",
              backgroundColor: "transparent",
            }}
          >
            Conitnue Shopping
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
{
  /* <div id="footer">
            <div id="payment-method">
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png"
                  alt=""
                />
              </div>
              <div id="payment-img">
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png"
                  alt=""
                />
              </div>
            </div>
            <div id="need-help">Need Help ? Contact Us</div>
          </div> */
}
