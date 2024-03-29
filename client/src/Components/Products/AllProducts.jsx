import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar";
import "../../Styles/AllProducts.css";
import { useNavigate } from "react-router-dom";
import loader from "../../Assets/gifs/loader.gif";
import api from "../Config/APIConfig";

const AllProducts = () => {
  const [allproducts, setAllProducts] = useState([]);
  const route = useNavigate();
  

  useEffect(() => {
    async function allProducts() {
      try {
        const response = await api.get("/getproducts");

        if (response.data.success) {
          setAllProducts(response.data.allProducts);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    }

    allProducts();
  }, []);

  const handleCategoryChange = async (e) => {
    const { value } = e.target;

    try {
      const response = await api.get("/getproducts");

      const getAllProduct = response.data.allProducts;

      if (value === "Mens") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Mens"
        );
        setAllProducts(filterProduct);
      } else if (value === "Womens") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Womens"
        );
        setAllProducts(filterProduct);
      } else if (value === "Kids") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Kids"
        );
        setAllProducts(filterProduct);
      } else if (value === "Home") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Home"
        );
        setAllProducts(filterProduct);
      } else if (value === "Beauty") {
        const filterProduct = getAllProduct.filter(
          (e) => e.category === "Beauty"
        );
        setAllProducts(filterProduct);
      } else {
        setAllProducts(getAllProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  
  return (
    <>
      <Navbar />

      <div id="allProd-main-body">
        <div className="heading">
          <p>
            Home / Clothing / <b> Men T-Shirts</b>
          </p>
        </div>
        <div className="heading">
          <p>
            <b> Men T-Shirts </b>- 102834 items
          </p>
        </div>

        <div id="heading-2">
          <div id="head-1">
            <div id="filter-heading">
              <p>
                <b> FILTERS</b>
              </p>
            </div>

            <div id="three-options-heading">
              <p>Bundles</p>
              <p>Country of Origin</p>
              <p>Size</p>
            </div>
          </div>

          <div id="recommemdations">
            <select onChange={handleCategoryChange}>
              <option value="">Sort by: Category</option>
              <option value="Mens">Men</option>
              <option value="Womens">Women</option>
              <option value="Kids">Kids</option>
              <option value="Home">Home</option>
              <option value="Beauty">Beauty</option>
            </select>
          </div>
        </div>

        <div id="main-section">
          <div id="filter">
            <div className="all-filter">
              <div id="filter-1">
                <h4>Categories</h4>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Tshirts ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Lounge ( 101580)</p>
                </div>
              </div>
              {/* <!-- filter 2  --> */}
              <div id="filter-2">
                <h4>Brands</h4>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Roadsters ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>HRX ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>PUMA ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>WORNG ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>JACK & JONES ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>TOMMY ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>FRISKERS ( 101580)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>US (POLO) ( 101580)</p>
                </div>
                <p className="more">+ 616 more</p>
              </div>

              {/* <!-- filter 3  --> */}

              <div id="filter-3">
                <h4>PRICE</h4>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Rs. 124 to Rs. 4593 (102143)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Rs. 4593 to Rs. 9062 (15245)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Rs. 9062 to Rs. 13531 (100)</p>
                </div>
                <div className="left-filters">
                  <input type="checkbox" />
                  <p>Rs. 13531 to Rs. 18000 (4)</p>
                </div>
              </div>

              {/* <!-- filter 4 --> */}

              <div id="filter-4">
                <h4>COLORS</h4>
                <div className="left-filters color-section">
                  <input type="checkbox" />
                  <p className="color-size" id="green"></p>
                  <p>Green (1024)</p>
                </div>
                <div className="left-filters color-section">
                  <input type="checkbox" />
                  <p className="color-size" id="yellow"></p>

                  <p>Yellow (555)</p>
                </div>
                <div className="left-filters color-section">
                  <input type="checkbox" />
                  <p className="color-size" id="red"></p>

                  <p>Red (65)</p>
                </div>
                <div className="left-filters color-section">
                  <input type="checkbox" />
                  <p className="color-size" id="blue"></p>

                  <p>Blue (25)</p>
                </div>
                <div className="left-filters color-section">
                  <input type="checkbox" />
                  <p className="color-size" id="pink"></p>

                  <p>Pink (5)</p>
                </div>

                <p className="more">+ 39 more</p>
              </div>

              <div id="filter-5">
                <h4>Discount RANGE</h4>
                <div className="left-filters">
                  <input type="radio" name="filter" />
                  <p>10% and above</p>
                </div>
                <div className="left-filters">
                  <input type="radio" name="filter" />
                  <p>20% and above</p>
                </div>
                <div className="left-filters">
                  <input type="radio" name="filter" />
                  <p>30% and above</p>
                </div>
                <div className="left-filters">
                  <input type="radio" name="filter" />
                  <p>40% and above</p>
                </div>
                <div className="left-filters">
                  <input type="radio" name="filter" />
                  <p>50% and above</p>
                </div>
              </div>
            </div>
          </div>
          <div id="mul-products">
            {allproducts?.length ? (
              <div id="mul-section">
                {allproducts.map((item) => (
                  <div
                    className="mul-img"
                    key={item._id}
                    onClick={() => route(`/singleproduct/${item._id}`)}
                  >
                    <div className="singleImg">
                      <img src={item.image} alt="" />
                    </div>

                    <div className="product-details">
                      <h4>{item.title}</h4>
                      <p>{item.prodBrand}</p>
                      <p>
                        <b>Rs.{item.price}</b>{" "}
                        <span className="line-through">
                          {/* Rs.{item.prodDiscount} */}
                        </span>
                        <span className="span-color">
                          {/* &nbsp;({item.prodOffer}) % */}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
                <div id="pages">
                  <div id="child-page">
                    <div>
                      <button>Previous</button>
                    </div>
                    <div>
                      <button>1</button>
                      <button>2</button>
                      <button>3</button>
                      <button>4</button>
                      <button>5</button>
                      <button>6</button>
                      <button>7</button>
                      <button>8</button>
                      <button>9</button>
                      <button>10</button>
                    </div>
                    <div>
                      <button>Next</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loader">
                <img src={loader} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;

{
  /* <div className="inside-img">
                        <p>4.5</p>
                        <i
                          className="fa-solid fa-star"
                          style={{ color: "#2aa24e" }}
                        ></i>
                        <p>|</p>
                        <p>355</p>
                      </div> */
}

{
  /* <p
                    style="
                        background-color: rgb(243, 85, 129);
                        width: 25%;
                        clip-path: polygon(
                          0% 0%,
                          100% 0%,
                          calc(100% - 20px) 50%,
                          100% 100%,
                          0% 100%
                        );
  
                        color: white;
                        font-weight: bold;
                        font-size: 0.9em;
                        padding-left: 5px;
                        position: absolute;
                        top: 5%;
                      "
                  >
                    New
                  </p> */
}
