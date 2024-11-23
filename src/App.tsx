import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css"; // Import the global CSS file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import LocHr from "./components/pages/LocHr";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router> 
      <div>
        <NavBar />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<LocHr />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
}
export default App;
