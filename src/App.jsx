import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import { Analytics } from "@vercel/analytics/react"
import PageUp from "./components/PageUp";
import Login from "./components/SignIn";
// import SignUp from "./components/SignUp.jsx";
import PersonalDashboard from "./pages/PersonalDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Register.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          {/* Fixed Navbar */}
          <Navbar />

        {/* Main Content */}
        <main className="flex-grow pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/personal-dashboard" element= {  <ProtectedRoute><PersonalDashboard /></ProtectedRoute>} />
          </Routes>
        </main>
        <PageUp /><Analytics/>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
