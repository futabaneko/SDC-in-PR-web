import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/join', label: '参加方法' },
  { to: '/rules', label: 'ルール' },
  { to: '/faq', label: 'FAQ' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-neutral-surface/95 backdrop-blur-sm border-b border-neutral-border z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-title font-bold text-xl flex items-center whitespace-pre" onClick={() => setMenuOpen(false)}>
          <span className="text-neutral-text-primary">SDC</span>
          <span className="text-neutral-text-secondary"> in </span>
          <span className="text-[#00BFFF]">P</span>
          <span className="text-[#FF69B4]">R</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`transition-colors ${location.pathname === to ? 'text-primary font-bold' : 'text-neutral-text-secondary hover:text-primary'}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-neutral-text-primary p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開閉"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-neutral-surface border-b border-neutral-border ${menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 border-b-0'}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-lg transition-colors ${location.pathname === to ? 'text-primary font-bold' : 'text-neutral-text-secondary hover:text-primary'}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
