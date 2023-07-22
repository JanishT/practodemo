 import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Vedioconsultant from "./Components/Vedioconsultant";
import Finddoctors from "./Components/Finddoctors";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Medicines from "./Components/Medicines";
import Labtests from "./Components/Labtests";
import Demo from "./Components/Demo";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="Finddoctor" element={<Finddoctors />} />
            <Route path="video" element={<Vedioconsultant />} />
            <Route path="medicines" element={<Medicines />} />
            <Route path="Labtest" element={<Labtests />} />
            
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
      <Demo/>
    </div>
  );
}

export default App; 
