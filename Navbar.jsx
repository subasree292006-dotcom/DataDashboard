import { Link } from "react-router-dom";
import { useState } from "react";
import Back from "../assets/datalab.jpg";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-lg">

      <div className="flex justify-between items-center px-4 md:px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Back}
            alt="Data Lab"
            className="w-10 h-10 rounded-full object-cover"
          />
         <h1 className="text-2xl md:text-4xl font-bold">
            DataAI</h1>
        </div>
        <ul className="hidden lg:flex items-center gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/charts">Charts</Link></li>
          <li><Link to="/ai-chat">AI Chat</Link></li>
          <li><Link to="/data">Data</Link></li>
        </ul>
        <button
          onClick={() => navigate("/dashboard")}
          className="hidden lg:block bg-white text-black font-bold rounded-lg px-4 py-2" >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() =>
            setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-700">
        <ul className="flex flex-col text-center py-4 gap-4">
          <li>
              <Link to="/" onClick={() =>
                  setMenuOpen(false)}>Home</Link>
                  </li>
          <li>
              <Link to="/features"onClick={() =>
                  setMenuOpen(false)}>Features
              </Link>
            </li>

            <li>
              <Link  to="/dashboard"
                onClick={() =>
                  setMenuOpen(false)}>
                Dashboard
              </Link></li>

            <li>
              <Link to="/charts"
                onClick={() =>
                  setMenuOpen(false)}>
                Charts
              </Link>
            </li>

            <li>
              <Link to="/ai-chat"
                onClick={() =>
                  setMenuOpen(false)
                }>
                AI Chat
              </Link>
            </li>

            <li>
              <Link to="/data"
                onClick={() =>
                  setMenuOpen(false)}>
                Data
              </Link>
            </li>

            <li>
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setMenuOpen(false);
                }}
                className="bg-white text-black font-bold rounded-lg px-4 py-2"
              >
                Get Started
              </button>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;