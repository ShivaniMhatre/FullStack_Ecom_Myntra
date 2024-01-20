import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyntraContext } from "../Context/MyContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfileDropDown = () => {
  const route = useNavigate();

  const { state, logout } = useContext(MyntraContext);

  // console.log(state);

  const logoutUser = () => {
    logout();
    toast.success("Logged Out success");
    route('/')
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={700}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div id="dropdown-prof">
        {/* <h2 id="profile_name"></h2> */}

        {!state?.currentuser ? (
          <div className="logout_login">
            <h2>Welcome</h2>
            <p>To access account and manage orders</p>

            <button onClick={() => route("/login")}>LOGIN/SIGNUP</button>
          </div>
        ) : (
          <div className="logout_login" onClick={() => route("/profile")}>
            <h4>
              Welcome
              <span
                style={{
                  marginLeft: "3%",
                  padding: "2% 3%",
                  fontWeight: "bold",
                  color: "black",
                  fontSize: "1.2em",
                }}
              >
                {state?.currentuser?.name.toUpperCase()}
              </span>
            </h4>
            <p>To access account and manage orders</p>
          </div>
        )}
        <div>
          {state?.currentuser?.role === "Seller" ? (
            <div>
              <div
                style={{
                  cursor: "pointer",
                  color: "white",
                  width: "75%",
                  marginTop: "1%",
                  textAlign: "center",
                  backgroundColor: "rgb(246, 62, 62)",
                }}
              >
                <h4 onClick={() => route("/addproduct")}>Add Product</h4>
              </div>

              <div
                style={{
                  cursor: "pointer",
                  backgroundColor: "green",
                  width: "55%",
                  marginTop: "1%",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <h4 onClick={() => route("/myproducts")}>My Products</h4>
              </div>
            </div>
          ) : null}

          <p>Orders</p>
          <p>Wishlists</p>
          <p>Gift Cards</p>
          <p>Contact us</p>
          <p>Myntra Inside</p>
        </div>
        <div>
          <p>Myntra Credit</p>
          <p>Coupons</p>
          <p>Saved Cards</p>
          <p>Saved VPA</p>
          <p>Saved Addresses</p>
        </div>

        {state?.currentuser?.name && (
          <div className="logout_login">
            {/* <p>Edit Profile</p> */}
            <button onClick={logoutUser}>Logout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileDropDown;
