import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../Navbar";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [productData, setproductData] = useState({});
  const { productId } = useParams();

  const route = useNavigate();

  const updateProductDetails = (e) => {
    const { value, name } = e.target;
    setproductData({ ...productData, [name]: value });
  };

  useEffect(() => {
    const showUpdateProdContainer = async () => {
      // console.log(productId);
      try {
        const token = JSON.parse(localStorage.getItem("myntraToken"));

        const response = await axios.post(
          "http://localhost:8000/geteditproduct",
          { productId, token }
        );

        if (response.data.success) {
          setproductData(response.data.singleProductInputData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    showUpdateProdContainer();
  }, []);

  const updateProductSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("myntraToken"));
      const response = await axios.patch(
        "http://localhost:8000/updateproduct",
        { token, productData, productId }
      );

      if (response?.data?.success) {
        toast.success(response.data.message);
        setTimeout(() => {
          route("/myproducts");
        }, 800);
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
      <Navbar />
      <div>
        <div className="updateProductContainer">
          <div className="updateProductSection">
            <div style={{ marginTop: "2%", marginLeft: "5%" }}>
              <NavLink style={{ backgroundColor: "white" }} to="/myproducts">
                Go back
              </NavLink>
            </div>
            <form onSubmit={updateProductSubmit} className="updateProductForm">
              <div>
                <input
                  name="title"
                  type="text"
                  placeholder="Update Title"
                  onChange={updateProductDetails}
                  value={productData.title}
                />
              </div>

              <div>
                <input
                  name="price"
                  type="number"
                  placeholder="Update Price"
                  onChange={updateProductDetails}
                  value={productData.price}
                />
              </div>

              <div>
                <input
                  name="image"
                  type="text"
                  placeholder="Update Image Url"
                  onChange={updateProductDetails}
                  value={productData.image}
                />
              </div>

              <div>
                <select
                  value={productData.category}
                  onChange={updateProductDetails}
                  name="category"
                >
                  <option value="">SELECT CATEGORY</option>
                  <option value="Mens">Mens</option>
                  <option value="Womens">Womens</option>
                  <option value="Kids">Kids</option>
                  <option value="HOME">HOME</option>
                  <option value="Beauty">Beauty</option>
                </select>
              </div>

              <div>
                <input type="submit" value="UPDATE PRODUCT" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProduct;
