import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/store" element={<h1>Store</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/hours" element={<h1>Hours</h1>} />
      </Routes>
    </div>
  );
}

export default App;
