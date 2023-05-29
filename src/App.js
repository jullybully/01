import "./App.css";
import NavBar from "./components/design/NavBar";
import Home from "./components/pages/Home";
import Discovery from "./components/pages/Discovery";
import Restaurants from "./components/pages/Restaurants";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RestaurantDetails from "./components/context/RestaurantDetails";
import Footer from "./components/design/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/restaurant" element={<Restaurants />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </>
  );
}

export default App;
