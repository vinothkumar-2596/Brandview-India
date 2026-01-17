'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
  ];

  const dropdownLinks = [
    { href: '/team', label: 'Team' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/faq', label: 'FAQ' },
  ];

  const blogLinks = [
    { href: '/blog', label: 'Latest Posts' },
    { href: '/blog?category=insights', label: 'Insights' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white"
    >
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-slate-900">BrandView India</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
                className="flex items-center text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Pages
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-40 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
                onBlur={() => setTimeout(() => setIsBlogDropdownOpen(false), 150)}
                className="flex items-center text-slate-600 transition-colors duration-200 hover:text-slate-900"
              >
                Blog
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isBlogDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isBlogDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white py-2 shadow-xl">
                  {blogLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              href="/contact"
              className="text-slate-600 transition-colors duration-200 hover:text-slate-900"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="rounded-full bg-slate-900 px-6 text-white hover:bg-slate-900/90">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {dropdownLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {blogLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-lg text-slate-600 transition-colors hover:text-slate-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
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
