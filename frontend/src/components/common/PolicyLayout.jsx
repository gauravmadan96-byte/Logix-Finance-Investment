import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "@/hooks/useDocumentTitle";

/*
  Simple, clean policy layout in the editorial NBFC template style.
  - Page header band
  - Two-column: in-page sub-policies list (left) + content card (right)
  - Existing policy JSX uses .gov-content + .gov-table classes which are now
    re-styled to a clean, modern look (see index.css).
*/

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

export default function PolicyLayout({ title, lastUpdated, children }) {
  useDocumentTitle(title);
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  
  return (
    <main id="main-content" data-testid="policy-layout">
      {/* Page header band */}
      <section className="hero-bg">
        <div className="container-x py-12 md:py-16">
          <div className="text-xs uppercase tracking-[0.18em] text-[#B85C38] font-semibold mb-3" data-testid="breadcrumb" style={{ fontFamily: "Manrope" }}>
            <Link to="/" className="text-[#F9F8F6]/80 hover:text-[#B85C38] transition-colors no-underline">Home</Link>
            <span className="mx-2 opacity-50">/</span>
            Policies
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#F9F8F6] leading-tight" style={{ fontFamily: "Cormorant Garamond" }}>
            {title}
          </h1>
        </div>
      </section>

      <div className="container-x py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-3">
            <div className="card-soft" data-testid="policy-sidebar">
              <h3 className="text-xs font-bold text-[#1A2421] tracking-wider mb-4"
                style={{ fontFamily: "Manrope" }}>
                POLICIES &amp; DISCLOSURES
              </h3>
              <ul className="space-y-1">
                {POLICIES.map((p) => {
                  const active = path === p.to;
                  return (
                    <li key={p.to}>
                      <Link
                        to={p.to}
                        data-testid={`sidebar-${p.to.split("/").pop()}`}
                        className={`block text-[13px] py-1.5 px-3 -mx-3 rounded-sm no-underline transition-colors ${
                          active 
                            ? "bg-[#B85C38]/10 text-[#B85C38] font-semibold" 
                            : "text-[#1A2421] hover:text-[#B85C38] hover:bg-[#F3F1EC]"
                        }`}
                        style={{ fontFamily: "Manrope" }}
                      >
                        {p.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="card-soft mt-4 bg-[#F3F1EC] border-[#E5E3DB]" style={{ fontFamily: "Manrope" }}>
              <div className="text-xs font-semibold text-[#B85C38]">Need a copy?</div>
              <p className="text-[12px] text-[#64746C] mt-1.5 mb-0 leading-relaxed">
                Printed versions of all policies are available at our registered office on request.
              </p>
            </div>
          </aside>

          {/* Content */}
          <article className="md:col-span-9">
            <div className="card-soft bg-white">
              <div className="gov-content">{children}</div>
              <hr className="my-6 border-[#E5E3DB]" />
              <div className="text-xs text-[#64746C]" style={{ fontFamily: "Manrope" }}>
                <strong className="text-[#1A2421]">Last Updated:</strong>{" "}
                {lastUpdated || <span className="ph">DD MMM YYYY</span>}
                <span className="mx-3 opacity-50">|</span>
                <strong className="text-[#1A2421]">Approved by:</strong> Board of Directors,
                Logix Finance &amp; Investment Pvt Ltd
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
