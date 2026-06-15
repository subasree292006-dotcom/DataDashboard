import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0b1023] border-t border-[#1E2A5A] text-white py-8 px-8 mt-10">
      
      <div className="flex justify-between flex-wrap gap-8">

        {/* Project Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">
            DataAI Dashboard
          </h2>

          <p className="text-gray-400 mt-3 max-w-sm">
            Transform CSV datasets into interactive charts,
            analytics, and AI-powered insights.
          </p>
        </div>

       
        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Contact
          </h3>

          <ul className="text-gray-400 space-y-2">
            <li>👩‍💻 Suba Sree</li>
            <li><a
    href="mailto:subasree.292006@gmail.com"
  >📧 subasree.292006@gmail.com </a></li>
            <li><a
    href="tel:+919080771365"
    className="text-white hover:text-blue-400"
  >📱 +91 90807 71365</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="flex justify-between items-center border-t border-slate-700 mt-8 pt-4 flex-wrap gap-2">
        <p className="text-gray-500 text-sm">
          © 2026 DataAI Dashboard
        </p>

        <p className="text-gray-500 text-sm">
          Built with React • Tailwind • Node.js • Groq AI
        </p>
      </div>

    </footer>
  );
}

export default Footer;