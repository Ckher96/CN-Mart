import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Store from "./components/Store/Store";
import "./App.css";
import Cart from "./components/Cart/Cart";
import StoreCat from "./components/Store/StoreCat";
import About from "./components/About/About";
import StoreProducts from "./components/Store/StoreProducts";
import Hours from "./components/Hours/Hours";

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />}>
            <Route path="/store" element={<StoreProducts />} />
            <Route path="/store/:itemCategory" element={<StoreCat />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<h1>Path not found</h1>} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
