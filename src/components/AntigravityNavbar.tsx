import React from 'react';
import { ChevronDown, Download, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const AntigravityNavbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-7">
          <Link to="/" className="flex items-center gap-2">
            <Terminal className="text-[#4285f4]" size={24} />
            <span className="font-medium text-base tracking-tight text-gray-900">
              <span className="font-bold">Maurice</span> Nshuti
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-600">
            <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <a href="/#about" className="hover:text-gray-900 transition-colors">About</a>
            <Link to="/work" className="hover:text-gray-900 transition-colors">Work</Link>
            <a href="/#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <Link to="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center">
          <a href="/#contact" className="flex items-center gap-2 bg-[#1a1a1c] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default AntigravityNavbar;
