import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AllProducts from "./Components/Products/AllProducts";
import SingleProduct from "./Components/Products/SingleProduct";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import AddProduct from "./Components/Products/AddProduct";
import Men from "./Components/Products/Men";
import Women from "./Components/Products/Women";
import Kids from "./Components/Products/Kids";
import Beauty from "./Components/Products/Beauty";
import HomeProduct from "./Components/Products/HomeProduct";
import Myproducts from "./Components/Products/Myproducts";
import UpdateProduct from "./Components/Products/UpdateProduct";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route exact path="/menmyntra" element={<Men />} />
          <Route exact path="/womenmyntra" element={<Women />} />
          <Route exact path="/kidsmyntra" element={<Kids />} />
          <Route exact path="/homeproductmyntra" element={<HomeProduct />} />
          <Route exact path="/beautymyntra" element={<Beauty />} />
          <Route
            exact
            path="/singleproduct/:productId"
            element={<SingleProduct />}
          />
          <Route
            exact
            path="/updateproduct/:productId"
            element={<UpdateProduct />}
          />
          <Route exact path="/addproduct" element={<AddProduct />} />
          <Route exact path="/myproducts" element={<Myproducts />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
