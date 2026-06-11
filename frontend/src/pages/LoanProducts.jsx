import React from "react";
import { Link } from "react-router-dom";
import { Wallet, Building2, TrendingUp, CreditCard, CheckCircle2, ArrowRight, FileText } from "lucide-react";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const PRODUCTS = [
  {
    icon: Wallet,
    title: "Pay Day Loan",
    purpose: "Short-tenure unsecured personal loan to bridge a temporary cash-flow gap until your next pay cycle.",
    amount: "₹5,000 – ₹1,00,000",
    tenure: "7 days – 12 months",
    rate: "0.10% – 1.00% per day",
    docs: ["PAN Card", "Aadhaar Card", "Latest bank statements", "Address proof", "Latest income proof"],
    eligibility: ["Indian resident, 21 years and above", "Steady source of income", "Active bank account", "Valid PAN and Aadhaar"],
  },
  {
    icon: Building2,
    title: "Business Loan",
    purpose: "Working capital and growth funding for self-employed professionals, shopkeepers, traders and small enterprises.",
    amount: "₹5,000 – ₹1,00,000",
    tenure: "Up to 12 months",
    rate: "8% – 25% per annum",
    docs: ["PAN of entity & promoter", "Aadhaar of promoter", "Business registration / GST", "Latest bank statements", "Latest ITR / financials"],
    eligibility: ["Indian resident proprietor / partner / director", "Active current account", "Business vintage as per credit policy", "Valid KYC documents"],
  },
  {
    icon: TrendingUp,
    title: "Loan Against Property (LAP)",
    purpose: "Secured loan against residential or commercial property for personal or business funding requirements.",
    amount: "₹1,00,000 – ₹25,00,000",
    tenure: "As per loan agreement",
    rate: "12% – 15% per annum",
    docs: ["PAN and Aadhaar", "Property documents (title deed / sale deed)", "Latest property tax receipt", "Latest bank statements", "Income proof / ITR"],
    eligibility: ["Indian resident, 21 years and above", "Clear and marketable title to the offered property", "Adequate repayment capacity"],
  },
  {
    icon: CreditCard,
    title: "EMI Loan",
    purpose: "Short-tenure loan repayable in equated monthly instalments for personal financial needs.",
    amount: "₹25,000 – ₹5,00,000",
    tenure: "Up to 6 months",
    rate: "24% – 365% per annum",
    docs: ["PAN Card", "Aadhaar Card", "Latest bank statements", "Address proof"],
    eligibility: ["Indian resident, 21 years and above", "Steady source of income", "Valid KYC documents"],
  },
];

export default function LoanProducts() {
  useDocumentTitle("Our Loan Products");
  return (
    <main id="main-content" data-testid="loan-products-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.18em] text-[#B85C38] font-semibold mb-3" style={{ fontFamily: "Manrope" }}>
            <Link to="/" className="text-[#F9F8F6]/80 hover:text-[#B85C38] no-underline transition-colors">Home</Link>
            <span className="mx-2 opacity-50">/</span>Loan Products
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#F9F8F6] max-w-3xl" style={{ fontFamily: "Cormorant Garamond" }}>
            Our Loan Products
          </h1>
          <p className="mt-4 text-[#c4cbc8] max-w-2xl" style={{ fontFamily: "Manrope" }}>
            Comprehensive credit solutions tailored to your needs. Every rate and fee
            is disclosed in the Key Fact Statement before you sign.
          </p>
        </div>
      </section>

      {/* SUMMARY TABLE */}
      <section className="section">
        <div className="container-x">
          <div className="eyebrow">At a Glance</div>
          <h2 className="section-title mt-2 mb-6">Summary of Loan Products</h2>
          <div className="card-soft p-0 overflow-hidden bg-white">
            <table className="gov-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: "8%" }}>#</th>
                  <th>Loan Product</th>
                  <th>Loan Amount</th>
                  <th>Tenure</th>
                  <th>Rate of Interest</th>
                </tr>
              </thead>
              <tbody>
                {PRODUCTS.map((p, i) => (
                  <tr key={p.title}>
                    <td>{i + 1}</td>
                    <td><strong>{p.title}</strong></td>
                    <td>{p.amount}</td>
                    <td>{p.tenure}</td>
                    <td>{p.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PRODUCT DETAIL CARDS */}
      <section className="section section-light">
        <div className="container-x space-y-8">
          {PRODUCTS.map((p, i) => (
            <div key={p.title} data-testid={`product-${i}`} className="card-soft bg-white">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <div className="icon-circle accent" style={{ width: 72, height: 72 }}>
                    <p.icon size={32} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light mt-5 text-[#1A2421]" style={{ fontFamily: "Cormorant Garamond" }}>
                    {p.title}
                  </h2>
                  <p className="text-[#64746C] mt-3 text-[14.5px] leading-relaxed" style={{ fontFamily: "Manrope" }}>{p.purpose}</p>

                  <div className="mt-5 space-y-2 text-[14px]" style={{ fontFamily: "Manrope" }}>
                    <div className="flex justify-between border-b border-[#E5E3DB] py-2">
                      <span className="text-[#64746C]">Amount</span>
                      <span className="font-semibold text-[#1A2421]">{p.amount}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E3DB] py-2">
                      <span className="text-[#64746C]">Tenure</span>
                      <span className="font-semibold text-[#1A2421]">{p.tenure}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E5E3DB] py-2">
                      <span className="text-[#64746C]">Interest Rate</span>
                      <span className="font-semibold text-[#1A2421]">{p.rate}</span>
                    </div>
                  </div>

                  <Link to="/contact" data-testid={`product-apply-${i}`} className="btn btn-accent mt-6">
                    Apply Now <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="md:col-span-8 md:border-l md:border-[#E5E3DB] md:pl-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="eyebrow">Eligibility</div>
                      <ul className="mt-3 space-y-2.5" style={{ fontFamily: "Manrope" }}>
                        {p.eligibility.map((e, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#1A2421]">
                            <CheckCircle2 size={16} className="text-[#B85C38] mt-0.5 shrink-0" />
                            <span>{e}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="eyebrow">Documents Required</div>
                      <ul className="mt-3 space-y-2.5" style={{ fontFamily: "Manrope" }}>
                        {p.docs.map((d, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#1A2421]">
                            <FileText size={16} className="text-[#B85C38] mt-0.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 text-xs text-[#64746C]" style={{ fontFamily: "Manrope" }}>
                    For applicable fees and charges, please see our{" "}
                    <Link to="/policies/rates-fees-charges" className="text-[#1A2421] underline hover:text-[#B85C38]">Rates, Fees &amp; Charges</Link> page and{" "}
                    <Link to="/policies/interest-rate-policy" className="text-[#1A2421] underline hover:text-[#B85C38]">Interest Rate Policy</Link>.
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COOLING OFF */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="card-soft bg-[#F3F1EC] border-[#E5E3DB]" style={{ fontFamily: "Manrope" }}>
            <h3 className="font-medium text-[#B85C38]" style={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}>
              Free Look / Cooling-Off Period
            </h3>
            <p className="text-sm text-[#64746C] mt-2 mb-0 leading-relaxed">
              You may exit the loan within <strong>3 days of loan disbursement</strong> by
              repaying the principal and applicable charges. No prepayment penalty is
              charged during this period.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
