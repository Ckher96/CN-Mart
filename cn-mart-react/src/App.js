import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Store from "./components/Store/Store";
import "./App.css"
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/hours" element={<h1>Hours</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
