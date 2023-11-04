import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Store from "./components/Store/Store";
import "./App.css";
import Cart from "./components/Cart/Cart";
import StoreCat from "./components/Store/StoreCat";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store">
          <Route path="/store" element={<Store />} />
          <Route path="/store/chips" element={<StoreCat />} />
        </Route>
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/hours" element={<h1>Hours</h1>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<h1>Path not found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
