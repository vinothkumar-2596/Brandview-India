import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownCloseTimer = useRef(null);
  const blogCloseTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openDropdown = () => {
    if (dropdownCloseTimer.current) {
      clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
    setIsDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownCloseTimer.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 120);
  };

  const openBlogDropdown = () => {
    if (blogCloseTimer.current) {
      clearTimeout(blogCloseTimer.current);
      blogCloseTimer.current = null;
    }
    setIsBlogDropdownOpen(true);
  };

  const closeBlogDropdown = () => {
    blogCloseTimer.current = setTimeout(() => {
      setIsBlogDropdownOpen(false);
    }, 120);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
  ];

  const dropdownLinks = [
    { href: "/team", label: "Team" },
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  const blogLinks = [
    { href: "/blog", label: "Latest Posts" },
    { href: "/blog", label: "Insights" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-[1200px] items-center px-4 sm:px-6 pt-5">
        <div className="flex w-full items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-5 py-3 backdrop-blur-2xl">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 shadow-inner">
              <span className="h-3 w-3 rounded-full bg-slate-900" />
            </span>
            <span className="text-lg font-semibold text-slate-900">BrandView India</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive ? "text-primary" : "text-slate-600 hover:text-slate-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div
            className="relative pt-2 -mt-2"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center transition-colors duration-200 ${
                isDropdownOpen ? "text-primary" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Pages
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div
                className="dropdown-glass absolute top-full left-0 mt-2 w-40 rounded-2xl border border-white/70 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                {dropdownLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-slate-600 transition-colors hover:bg-white/60 hover:text-slate-900"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative pt-2 -mt-2"
            onMouseEnter={openBlogDropdown}
            onMouseLeave={closeBlogDropdown}
          >
            <button
              onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
              className={`flex items-center transition-colors duration-200 ${
                isBlogDropdownOpen ? "text-primary" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Blog
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform ${
                  isBlogDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isBlogDropdownOpen && (
              <div
                className="dropdown-glass absolute top-full left-0 mt-2 w-44 rounded-2xl border border-white/70 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
                onMouseEnter={openBlogDropdown}
                onMouseLeave={closeBlogDropdown}
              >
                {blogLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className="block px-4 py-2 text-slate-600 transition-colors hover:bg-white/60 hover:text-slate-900"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-200 ${
                isActive ? "text-primary" : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

          <div className="hidden lg:block">
            <Link to="/contact">
            <Button className="rounded-2xl bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="mt-3 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {dropdownLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            {blogLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="mt-4 w-full rounded-full bg-slate-900 text-white hover:bg-slate-900/90">
                Start a project
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

