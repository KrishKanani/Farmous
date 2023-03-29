import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Weather from "./Components/Weather";
import AboutUs from "./Components/AboutUs";
import GovScheme from "./Components/GovScheme";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Loan from "./Components/Loan";
import Footer from "./Components/Footer";
// import "../node_modules/react-bootstrap/dist/react-bootstrap";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import GovSchemeDetail from "./Components/GovSchemeDetail";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Navbar setIsLogin={setIsLogin} isLogin={isLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/govScheme" element={<GovScheme />} />
        <Route
          path="/govScheme/govSchemeDetail"
          element={<GovSchemeDetail />}
        />

        <Route path="/loan" element={<Loan />} />
        <Route path="/weather" element={<Weather />} />
        {/* <Route path="/weather" element={<Store />} /> */}
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* <Route path="/weather" element={<ContactUs />} /> */}
        <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
        />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
