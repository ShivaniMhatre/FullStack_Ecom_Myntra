import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import "../../Styles/AddProduct.css";
import { v4 as uid } from "uuid";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyntraContext } from "../Context/MyContext";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    prodDiscount: "",
    category: "",
  });
  const route = useNavigate();

  const { state } = useContext(MyntraContext);

  const handleProductDetails = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    const { title, price, image, category } = product;

    if (title && price && image && category) {
      try {
        const token = JSON.parse(localStorage.getItem("myntraToken"));
        const response = await api.post("/addproduct", {
          product,
          token,
        });

        if (response.data.success) {
          setProduct(response.data.productDetails);
          setTimeout(() => {
            route("/myproducts");
          }, 500);
          toast.success(response.data.message);
          setProduct({
            title: "",
            price: "",
            image: "",
            prodDiscount: "",
            category: "",
          });
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    } else {
      toast.error("please fill all the product details");
    }
  };

  useEffect(() => {
    if (!state?.currentuser?.name) {
      route("/");
    }
  }, [state]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />

      <div className="addProductContainer">
        <div className="addProductSection">
          <form onSubmit={handleProductSubmit}>
            <div>
              <input
                name="title"
                value={product.title}
                type="text"
                placeholder="Product Title"
                onChange={handleProductDetails}
              />
            </div>

            <div>
              <input
                name="price"
                value={product.price}
                type="number"
                placeholder="Product Price"
                onChange={handleProductDetails}
              />
            </div>

            <div>
              <input
                name="image"
                value={product.image}
                type="text"
                placeholder="Product Image Url"
                onChange={handleProductDetails}
              />
            </div>

            <div>
              <select
                onChange={handleProductDetails}
                name="category"
                value={product.category}
              >
                <option value="">SELECT CATEGORY</option>
                <option value="Mens">Mens</option>
                <option value="Womens">Womens</option>
                <option value="Kids">Kids</option>
                <option value="Home">HOME</option>
                <option value="Beauty">Beauty</option>
              </select>
            </div>

            <div>
              <input type="submit" value="SUBMIT PRODUCT" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
