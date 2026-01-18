import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Users,
  Tag,
  HelpCircle,
  Shield,
  Newspaper,
  Sparkles,
  Moon,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("light");
  const dropdownCloseTimer = useRef(null);
  const blogCloseTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const resolvedTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(resolvedTheme);
    document.documentElement.classList.toggle("theme-dark", resolvedTheme === "dark");
  }, []);

  const setThemeMode = (mode) => {
    setTheme(mode);
    if (typeof window === "undefined") return;
    document.documentElement.classList.toggle("theme-dark", mode === "dark");
    window.localStorage.setItem("theme", mode);
  };

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
    { href: "/team", label: "Team", icon: Users },
    { href: "/pricing", label: "Pricing", icon: Tag },
    { href: "/faq", label: "FAQ", icon: HelpCircle },
    { href: "/admin", label: "Admin", icon: Shield },
  ];

  const blogLinks = [
    { href: "/blog", label: "Latest Posts", icon: Newspaper },
    { href: "/blog", label: "Insights", icon: Sparkles },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-opacity duration-300 ${
        isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-[1200px] items-center px-4 sm:px-6 pt-5">
        <div className="header-bar flex w-full items-center justify-between rounded-2xl border border-white/80 bg-white/75 px-5 py-3 backdrop-blur-2xl">
          <Link to="/" className="flex items-center gap-3">
            <span className="header-logo flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/70 shadow-inner">
              <span className="header-logo-dot h-3 w-3 rounded-full bg-slate-900" />
            </span>
            <span className="header-title text-lg font-semibold text-slate-900">BrandView India</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `header-link transition-colors duration-200 ${
                  isActive ? "text-[#B3A380]" : "text-slate-600 hover:text-slate-900"
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
              className={`header-link flex items-center transition-colors duration-200 ${
                isDropdownOpen ? "text-[#B3A380]" : "text-slate-600 hover:text-slate-900"
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
                className="dropdown-panel absolute top-full left-1/2 mt-4 w-[90vw] max-w-[1100px] -translate-x-1/2 rounded-[24px] border border-secondary/20 px-8 py-7 shadow-[0_30px_70px_rgba(15,23,42,0.18)]"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="dropdown-label text-xs uppercase tracking-[0.3em] text-[#D8CCB5]/70">
                      Pages
                    </p>
                    <h4 className="dropdown-title mt-3 text-xl font-semibold text-[#F5EFE5]">
                      Explore BrandView India
                    </h4>
                    <p className="dropdown-copy mt-2 text-sm text-[#D8CCB5]/70">
                      Quick links to core pages, pricing, and support.
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm text-[#F5EFE5]">
                    {dropdownLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className="dropdown-item flex items-center justify-between rounded-xl border border-[#2C2C2C] bg-[#232323] px-4 py-3 transition hover:border-[#3A3A3A] hover:bg-[#2A2A2A]"
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="dropdown-icon h-4 w-4 text-[#B3A380]" />
                          {link.label}
                        </span>
                        <ArrowRight className="dropdown-arrow h-4 w-4 text-[#B3A380]" />
                      </NavLink>
                      );
                    })}
                  </div>
                </div>
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
              className={`header-link flex items-center transition-colors duration-200 ${
                isBlogDropdownOpen ? "text-[#B3A380]" : "text-slate-600 hover:text-slate-900"
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
                className="dropdown-panel absolute top-full left-1/2 mt-4 w-[90vw] max-w-[1100px] -translate-x-1/2 rounded-[24px] border border-secondary/20 px-8 py-7 shadow-[0_30px_70px_rgba(15,23,42,0.18)]"
                onMouseEnter={openBlogDropdown}
                onMouseLeave={closeBlogDropdown}
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="dropdown-label text-xs uppercase tracking-[0.3em] text-[#D8CCB5]/70">
                      Blog
                    </p>
                    <h4 className="dropdown-title mt-3 text-xl font-semibold text-[#F5EFE5]">
                      Latest insights
                    </h4>
                    <p className="dropdown-copy mt-2 text-sm text-[#D8CCB5]/70">
                      Thought leadership, case studies, and design strategy.
                    </p>
                  </div>
                  <div className="grid gap-3 text-sm text-[#F5EFE5]">
                    {blogLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className="dropdown-item flex items-center justify-between rounded-xl border border-[#2C2C2C] bg-[#232323] px-4 py-3 transition hover:border-[#3A3A3A] hover:bg-[#2A2A2A]"
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="dropdown-icon h-4 w-4 text-[#B3A380]" />
                          {link.label}
                        </span>
                        <ArrowRight className="dropdown-arrow h-4 w-4 text-[#B3A380]" />
                      </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `header-link transition-colors duration-200 ${
                isActive ? "text-[#B3A380]" : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

          <div className="hidden lg:flex items-center gap-3">
            <div className="flex h-9 items-center gap-2 rounded-full border border-white/60 bg-white/90 px-2 shadow-[0_6px_18px_rgba(15,23,42,0.08)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
              <button
                type="button"
                onClick={() => setThemeMode("dark")}
                className={`flex h-7 w-7 items-center justify-center rounded-full transition duration-200 ease-out hover:scale-105 active:scale-95 ${
                  theme === "dark"
                    ? "bg-[#B3A380] text-secondary shadow-sm"
                    : "text-secondary/50 hover:text-secondary"
                }`}
                aria-label="Enable dark mode"
                aria-pressed={theme === "dark"}
              >
                <Moon className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setThemeMode("light")}
                className={`flex h-7 w-7 items-center justify-center rounded-full transition duration-200 ease-out hover:scale-105 active:scale-95 ${
                  theme === "light"
                    ? "bg-[#B3A380] text-secondary shadow-sm"
                    : "text-secondary/50 hover:text-secondary"
                }`}
                aria-label="Enable light mode"
                aria-pressed={theme === "light"}
              >
                <Sun className="h-3.5 w-3.5" />
              </button>
            </div>
            <Link to="/contact">
              <Button className="h-9 rounded-2xl bg-secondary px-5 text-xs font-semibold text-secondary-foreground hover:bg-secondary/90">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4 text-[#B3A380]" />
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

