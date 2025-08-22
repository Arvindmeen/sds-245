import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import { Analytics } from "@vercel/analytics/react"
import PageUp from "./components/PageUp";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>
        <PageUp /><Analytics/>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
