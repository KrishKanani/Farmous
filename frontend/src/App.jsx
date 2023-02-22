import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather";
import AboutUs from "./Components/AboutUs";
import GovScheme from "./Components/GovScheme";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import GovSchemeDetail from "./Components/GovSchemeDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/govScheme" element={<GovScheme />} />
        <Route
          path="/govScheme/govSchemeDetail"
          element={<GovSchemeDetail />}
        />
        <Route path="/weather" element={<Weather />} />
        {/* <Route path="/weather" element={<Store />} /> */}
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/weather" element={<ContactUs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
