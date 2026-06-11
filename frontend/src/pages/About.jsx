import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Target, HeartHandshake, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { X } from "../components/common/Placeholder";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const ABOUT_IMG = "https://static.prod-images.emergentagent.com/jobs/6dc6f6ad-591a-49d3-bbd1-f3910b642e2e/images/e08b24ae7987cb29c81e2b675f88a1bb2ea9ada17820bc1fe264f0fc7d62fcd3.png";

const VALUES = [
  { icon: ShieldCheck, t: "Transparency", d: "Clear disclosure of all rates, fees and charges — before you sign." },
  { icon: HeartHandshake, t: "Customer Dignity", d: "Respectful, courteous service at every stage of the relationship." },
  { icon: Award, t: "Compliance", d: "Strict adherence to RBI directions and the Fair Practices Code." },
  { icon: Target, t: "Responsibility", d: "Loans matched to assessed repayment capacity — not the maximum we can lend." },
];

export default function About() {
  useDocumentTitle("About Us");
  return (
    <main id="main-content" data-testid="about-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.18em] text-[#B85C38] font-semibold mb-3" style={{ fontFamily: "Manrope" }}>
            <Link to="/" className="text-[#F9F8F6]/80 hover:text-[#B85C38] no-underline transition-colors">Home</Link>
            <span className="mx-2 opacity-50">/</span>
            About Us
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#F9F8F6] max-w-3xl" style={{ fontFamily: "Cormorant Garamond" }}>
            About Logix Finance &amp; Investment
          </h1>
          <p className="mt-4 text-[#c4cbc8] max-w-2xl" style={{ fontFamily: "Manrope" }}>
            A Non-Banking Financial Company (NBFC) committed to simple, transparent and
            responsible lending across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <img src={ABOUT_IMG} alt="Abstract architectural interlocking arches" className="w-full rounded-sm border border-[#E5E3DB] shadow-sm"
                style={{ maxHeight: 460, objectFit: "cover" }} />
            </div>
            <div className="lg:col-span-6">
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title mt-2">A Trusted NBFC Built for India</h2>
              <p className="mt-5 text-[#64746C] leading-relaxed" style={{ fontFamily: "Manrope" }}>
                Logix Finance &amp; Investment Private Limited is a Non-Banking Financial
                Company registered with the Reserve Bank of India. The Company is
                engaged in providing simple, transparent and responsible credit to
                individuals, self-employed professionals, traders, shopkeepers and
                small businesses across India.
              </p>
              <p className="text-[#64746C] leading-relaxed" style={{ fontFamily: "Manrope" }}>
                Our lending operations are conducted primarily through digital
                platforms in compliance with the Reserve Bank of India's directions
                for Non-Banking Financial Companies, including the Master Direction –
                Reserve Bank of India (Non-Banking Financial Companies – Responsible
                Business Conduct) Directions, 2025.
              </p>
              <ul className="mt-5 space-y-2.5" style={{ fontFamily: "Manrope" }}>
                {[
                  "RBI Registered NBFC",
                  "Board-approved Fair Practices Code",
                  "Transparent Key Fact Statement before every loan",
                  "3-day Free Look / Cooling-Off Period",
                ].map((x) => (
                  <li key={x} className="flex items-start gap-3 text-[15px] text-[#1A2421]">
                    <CheckCircle2 size={18} className="text-[#B85C38] mt-0.5 shrink-0" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="section section-light">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-feature bg-white">
              <div className="icon-circle accent">
                <Target size={26} />
              </div>
              <h3 className="text-xl font-medium mt-5 text-[#1A2421]">Our Vision</h3>
              <p className="text-[#64746C] mt-3 leading-relaxed text-sm" style={{ fontFamily: "Manrope" }}>
                To make formal credit simple, fair and accessible to every Indian
                household and small business — without compromising on compliance,
                transparency or customer dignity.
              </p>
            </div>
            <div className="card-feature bg-white">
              <div className="icon-circle">
                <Award size={26} />
              </div>
              <h3 className="text-xl font-medium mt-5 text-[#1A2421]">Our Mission</h3>
              <ul className="text-[#64746C] mt-3 leading-relaxed space-y-2 text-[14px]" style={{ fontFamily: "Manrope" }}>
                <li>• Provide transparent loan terms through written sanction letters and KFS.</li>
                <li>• Adopt responsible lending based on assessed repayment capacity.</li>
                <li>• Maintain ethical, lawful and fair recovery practices.</li>
                <li>• Ensure complete compliance with RBI directions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="eyebrow">Core Values</div>
            <h2 className="section-title mt-2">What We Stand For</h2>
            <p className="section-sub mx-auto">
              Four commitments that guide every loan we sanction and every customer interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v) => (
              <div key={v.t} className="card-feature bg-white">
                <div className="icon-circle">
                  <v.icon size={26} />
                </div>
                <h3 className="text-lg font-medium mt-5 text-[#1A2421]">{v.t}</h3>
                <p className="text-sm text-[#64746C] mt-2 leading-relaxed" style={{ fontFamily: "Manrope" }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="section section-light">
        <div className="container-x">
          <div className="eyebrow">Statutory Identity</div>
          <h2 className="section-title mt-2 mb-8">Company Information</h2>

          <div className="card-soft p-0 overflow-hidden bg-white">
            <table className="gov-table" style={{ margin: 0 }}>
              <tbody>
                <tr><td style={{ width: "35%" }}><strong>Legal Entity Name</strong></td><td>Logix Finance &amp; Investment Private Limited</td></tr>
                <tr><td><strong>Corporate Identity Number (CIN)</strong></td><td><X /></td></tr>
                <tr><td><strong>RBI Certificate of Registration No.</strong></td><td><X /></td></tr>
                <tr><td><strong>Category of Registration</strong></td><td><X>NBFC – Non-Deposit Taking</X></td></tr>
                <tr><td><strong>GSTIN</strong></td><td><X /></td></tr>
                <tr><td><strong>Registered Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
                <tr><td><strong>Corporate Office</strong></td><td><X />, <X />, <X /> – <X />, India</td></tr>
                <tr><td><strong>Customer Care</strong></td><td>879624245</td></tr>
                <tr><td><strong>Email</strong></td><td>info@logixfinanceandinvestment.com</td></tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8">
            <Link to="/policies/regulatory-disclosures" className="btn btn-primary">
              View All Regulatory Disclosures <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
