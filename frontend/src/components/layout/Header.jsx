import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X as XIcon, Phone } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header data-testid="site-header" className="sticky top-0 z-50 bg-[#F9F8F6] border-b border-[#E5E3DB]">
      {/* Top contact bar */}
      <div className="hidden md:block bg-[#1A2421] text-[#F9F8F6] text-xs">
        <div className="container-x flex items-center justify-between py-2">
          <div data-testid="top-contact" className="font-medium text-[#c4cbc8]">
            <Phone size={11} className="inline-block mr-1.5 -mt-0.5 text-[#B85C38]" />
            Customer Care: <strong className="text-[#B85C38]">879624245</strong>
            <span className="mx-3 opacity-30">|</span>
            Email: info@logixfinanceandinvestment.com
          </div>
          <div data-testid="top-grievance" className="space-x-1">
            <Link to="/policies/grievance-redressal" className="text-[#c4cbc8] hover:text-[#B85C38] transition-colors no-underline">
              Grievance Redressal
            </Link>
            <span className="opacity-30 text-[#c4cbc8]">|</span>
            <Link to="/policies/regulatory-disclosures" className="text-[#c4cbc8] hover:text-[#B85C38] transition-colors no-underline">
              Disclosures
            </Link>
          </div>
        </div>
      </div>

      {/* Main brand row */}
      <div className="container-x flex items-center justify-between h-[78px]">
        <Link to="/" className="flex items-center gap-3" data-testid="brand-logo-link" style={{ textDecoration: "none" }}>
          <span className="inline-flex items-center justify-center w-11 h-11 rounded-sm text-[#F9F8F6] font-bold text-xl"
            style={{ backgroundColor: "#1A2421", fontFamily: "Cormorant Garamond" }}>
            L
          </span>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ fontFamily: "Cormorant Garamond", fontWeight: 600, fontSize: 20, color: "#1A2421" }}>
              Logix Finance &amp; Investment
            </div>
            <div style={{ fontSize: 10, color: "#64746C", fontWeight: 600, letterSpacing: "0.06em", fontFamily: "Manrope" }}>
              PRIVATE LIMITED · NBFC REGISTERED WITH RBI
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" data-testid="primary-nav">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              data-testid={`nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-sm transition-colors ${
                  isActive ? "text-[#B85C38]" : "text-[#1A2421] hover:text-[#B85C38]"
                }`
              }
              style={{ fontFamily: "Manrope" }}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/loan-products" data-testid="header-apply-btn" className="btn btn-accent">
            Apply Now
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[#1A2421]"
          data-testid="mobile-menu-toggle"
          aria-label="Menu"
        >
          {open ? <XIcon size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E5E3DB] bg-[#F9F8F6]" data-testid="mobile-menu">
          <div className="container-x py-3 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`mobile-nav-${n.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold border-b border-[#E5E3DB]/50 last:border-0 ${
                    isActive ? "text-[#B85C38]" : "text-[#1A2421]"
                  }`
                }
                style={{ fontFamily: "Manrope" }}
              >
                {n.label}
              </NavLink>
            ))}
            <Link to="/loan-products" data-testid="mobile-apply-btn" className="btn btn-accent w-full justify-center mt-3 mb-2">
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
