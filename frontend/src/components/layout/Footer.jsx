import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { X } from "../common/Placeholder";

const MAIN = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/loan-products", label: "Loan Products" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact Us" },
];

const POLICIES = [
  { to: "/policies/fair-practices-code", label: "Fair Practices Code" },
  { to: "/policies/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/policies/grievance-redressal", label: "Grievance Redressal" },
  { to: "/policies/privacy-policy", label: "Privacy Policy" },
  { to: "/policies/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/policies/rates-fees-charges", label: "Rates, Fees & Charges" },
  { to: "/policies/terms-conditions", label: "Terms & Conditions" },
  { to: "/policies/refund-cancellation", label: "Refund & Cancellation" },
  { to: "/policies/disclaimer", label: "Disclaimer" },
  { to: "/policies/regulatory-disclosures", label: "Regulatory Disclosures" },
];

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[#0f2855] text-[#c4cbc8] mt-20 border-t border-[#E5E3DB]">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-md text-[#F9F8F6] font-bold text-xl"
                style={{ backgroundColor: "#F58220", fontFamily: "Poppins" }}>
                L
              </span>
              <div className="leading-tight">
                <div style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 18, color: "#F9F8F6" }}>
                  Logix Finance &amp; Investment
                </div>
                <div style={{ fontSize: 10, color: "#64746C", letterSpacing: "0.06em", fontFamily: "Open Sans" }}>
                  PRIVATE LIMITED
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#c4cbc8] max-w-sm" style={{ fontFamily: "Open Sans" }}>
              A Non-Banking Financial Company (NBFC) registered with the Reserve Bank of
              India. Offering simple, transparent and responsible credit across India.
            </p>

            <ul className="mt-6 space-y-3 text-[13px] text-[#c4cbc8] font-medium" style={{ fontFamily: "Open Sans" }}>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-[#F58220] shrink-0" />
                <span>WA-69A, Gali No. 18, Plot No. 1, WA Block, Shakarpur, Laxmi Nagar, East Delhi, India, 110092</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-[#F58220]" />
                <span>8796242452</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-[#F58220]" />
                <span>info@logixfinanceandinvestment.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-[#F58220]" />
                <span>10:30 AM – 6:30 PM (Mon – Sat)</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <h3 className="text-[#F9F8F6] text-sm font-semibold tracking-wide mb-4" style={{ fontFamily: "Poppins" }}>
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5" style={{ fontFamily: "Open Sans" }}>
              {MAIN.map((m) => (
                <li key={m.to}>
                  <Link
                    to={m.to}
                    data-testid={`footer-${m.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-[13px] text-[#c4cbc8] hover:text-[#F58220] no-underline transition-colors"
                  >
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies col 1 */}
          <div className="md:col-span-3">
            <h3 className="text-[#F9F8F6] text-sm font-semibold tracking-wide mb-4" style={{ fontFamily: "Poppins" }}>
              POLICIES
            </h3>
            <ul className="space-y-2.5" style={{ fontFamily: "Open Sans" }}>
              {POLICIES.slice(0, 5).map((p) => (
                <li key={p.to}>
                  <Link to={p.to} data-testid={`footer-policy-${p.to.split("/").pop()}`}
                    className="text-[13px] text-[#c4cbc8] hover:text-[#F58220] no-underline transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies col 2 */}
          <div className="md:col-span-3">
            <h3 className="text-[#F9F8F6] text-sm font-semibold tracking-wide mb-4" style={{ fontFamily: "Poppins" }}>
              LEGAL
            </h3>
            <ul className="space-y-2.5" style={{ fontFamily: "Open Sans" }}>
              {POLICIES.slice(5).map((p) => (
                <li key={p.to}>
                  <Link to={p.to} data-testid={`footer-policy-${p.to.split("/").pop()}`}
                    className="text-[13px] text-[#c4cbc8] hover:text-[#F58220] no-underline transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-8 border-[#E5E3DB]/20" />

        <div className="md:flex md:items-center md:justify-between gap-6 text-xs text-[#64746C] font-semibold" style={{ fontFamily: "Open Sans" }}>
          <div>
            <strong className="text-[#F9F8F6]">CIN:</strong> U65929DL2008PTC179113
            <span className="mx-3 opacity-30">|</span>
            <strong className="text-[#F9F8F6]">RBI Reg. No.:</strong> N-14.03191
            <span className="mx-3 opacity-30">|</span>
            <strong className="text-[#F9F8F6]">GSTIN:</strong> 07AABCL4912A1Z3
          </div>
          <div className="mt-3 md:mt-0">
            © 2026 Logix Finance &amp; Investment Pvt Ltd. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
