"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl">🐾</span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#00857C] leading-tight">We Love Pets</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            <NavDropdown 
              label="Services" 
              items={[
                { label: "Dog Walking", href: "/services/dog-walking" },
                { label: "Dog Sitting", href: "/services/dog-sitting" },
                { label: "Puppy Care", href: "/services/puppy-care" },
                { label: "Dog Home Boarding", href: "/services/dog-boarding" },
                { label: "Day Care", href: "/services/day-care" },
                { label: "Cat Sitting", href: "/services/cat-sitting" },
                { label: "Pet Sitting", href: "/services/pet-sitting" },
                { label: "Small Animal Care", href: "/services/small-animal-care" },
              ]}
            />
            <NavDropdown 
              label="About" 
              items={[
                { label: "About We Love Pets", href: "/about" },
                { label: "Our Ethical Approach", href: "/about/ethical-approach" },
                { label: "Buy a Franchise", href: "/franchise" },
                { label: "Jobs at We Love Pets", href: "/careers" },
                { label: "Why Choose Us?", href: "/about/why-choose-us" },
                { label: "Contact We Love Pets", href: "/contact" },
              ]}
            />
            <NavDropdown 
              label="News" 
              items={[
                { label: "In the Press", href: "/news/press" },
                { label: "Blogs", href: "/news/blogs" },
              ]}
            />
            <NavDropdown 
              label="Buy a Franchise" 
              items={[
                { label: "Franchise Overview", href: "/franchise" },
                { label: "Franchise Package", href: "/franchise/package" },
                { label: "Our Franchisees", href: "/franchise/franchisees" },
                { label: "Franchise News", href: "/franchise/news" },
                { label: "Franchise FAQs", href: "/franchise/faq" },
                { label: "Book a Discovery Session", href: "/franchise/discovery" },
              ]}
            />
            <li className="ml-4">
              <Link
                href="/branches"
                className="bg-[#00857C] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#006d66] transition-colors"
              >
                Find a branch
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <div className="space-y-2">
              <MobileNavSection 
                label="Services" 
                items={[
                  { label: "Dog Walking", href: "/services/dog-walking" },
                  { label: "Dog Sitting", href: "/services/dog-sitting" },
                  { label: "Cat Sitting", href: "/services/cat-sitting" },
                  { label: "Pet Sitting", href: "/services/pet-sitting" },
                  { label: "Dog Boarding", href: "/services/dog-boarding" },
                ]}
              />
              <MobileNavSection 
                label="About" 
                items={[
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ]}
              />
              <MobileNavSection 
                label="Franchise" 
                items={[
                  { label: "Overview", href: "/franchise" },
                  { label: "FAQs", href: "/franchise/faq" },
                ]}
              />
              <div className="pt-4">
                <Link
                  href="/branches"
                  className="block w-full text-center bg-[#00857C] text-white px-6 py-3 rounded-full font-semibold"
                >
                  Find a branch
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <li className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-[#00857C] transition-colors font-medium">
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-white shadow-xl rounded-xl py-3 min-w-[220px] border border-gray-100">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-5 py-2.5 text-gray-700 hover:bg-[#00857C]/10 hover:text-[#00857C] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

function MobileNavSection({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 pb-2">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-2 py-2 text-gray-900 font-semibold"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pl-4 space-y-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-600 hover:text-[#00857C]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
