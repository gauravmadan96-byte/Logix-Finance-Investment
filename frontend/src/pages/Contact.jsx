import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert, Building2 } from "lucide-react";
import { X } from "../components/common/Placeholder";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const SUBJECTS = [
  "General Enquiry",
  "Pay Day Loan",
  "Business Loan",
  "Loan Against Property (LAP)",
  "EMI Loan",
  "Grievance / Complaint",
  "Other",
];

export default function Contact() {
  useDocumentTitle("Contact Us");
  const [form, setForm] = useState({
    name: "", mobile: "", email: "", city: "", subject: SUBJECTS[0], message: "", consent: false,
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "Sending your enquiry..." });
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus({ state: "success", message: data.message || "Your enquiry has been received." });
        setForm({ name: "", mobile: "", email: "", city: "", subject: SUBJECTS[0], message: "", consent: false });
      } else {
        const err = data.error || (data.errors && data.errors.join(" ")) || "We could not send your enquiry. Please call 879624245 or email us directly.";
        setStatus({ state: "error", message: err });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error — please call 879624245 or email info@logixfinanceandinvestment.com.",
      });
    }
    setTimeout(() => setStatus((s) => (s.state === "success" ? { state: "idle", message: "" } : s)), 8000);
  };

  return (
    <main id="main-content" data-testid="contact-page">
      {/* HERO */}
      <section className="hero-bg">
        <div className="container-x py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.18em] text-[#B85C38] font-semibold mb-3" style={{ fontFamily: "Manrope" }}>
            <Link to="/" className="text-[#F9F8F6]/80 hover:text-[#B85C38] no-underline transition-colors">Home</Link>
            <span className="mx-2 opacity-50">/</span>Contact Us
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#F9F8F6] max-w-3xl" style={{ fontFamily: "Cormorant Garamond" }}>
            Get in Touch
          </h1>
          <p className="mt-4 text-[#c4cbc8] max-w-2xl" style={{ fontFamily: "Manrope" }}>
            For product enquiries, application help, repayment support or grievance
            redressal — our team is here during working hours.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="section">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="card-feature bg-white">
              <div className="icon-circle"><Phone size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#1A2421]" style={{ fontFamily: "Manrope" }}>Phone</h3>
              <p className="text-sm text-[#64746C] mt-1.5" style={{ fontFamily: "Manrope" }}>879624245</p>
            </div>
            <div className="card-feature bg-white">
              <div className="icon-circle accent"><Mail size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#1A2421]" style={{ fontFamily: "Manrope" }}>Email</h3>
              <p className="text-sm text-[#64746C] mt-1.5 break-all" style={{ fontFamily: "Manrope" }}>info@logixfinanceandinvestment.com</p>
            </div>
            <div className="card-feature bg-white">
              <div className="icon-circle"><Clock size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#1A2421]" style={{ fontFamily: "Manrope" }}>Working Hours</h3>
              <p className="text-sm text-[#64746C] mt-1.5" style={{ fontFamily: "Manrope" }}>10:30 AM – 6:30 PM<br />Monday to Saturday</p>
            </div>
            <div className="card-feature bg-white">
              <div className="icon-circle accent"><ShieldAlert size={24} /></div>
              <h3 className="text-base font-bold mt-4 text-[#1A2421]" style={{ fontFamily: "Manrope" }}>Grievance</h3>
              <p className="text-sm text-[#64746C] mt-1.5 break-all" style={{ fontFamily: "Manrope" }}>grievance@logixfinanceandinvestment.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFICES + FORM */}
      <section className="section section-light">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Offices */}
            <div className="lg:col-span-5 space-y-5">
              <div className="card-soft bg-white">
                <div className="flex items-center gap-3">
                  <Building2 size={20} className="text-[#B85C38]" />
                  <h3 className="text-base font-bold text-[#1A2421]" style={{ fontFamily: "Manrope" }}>Registered Office</h3>
                </div>
                <p className="mt-3 text-sm text-[#64746C] leading-relaxed mb-0" style={{ fontFamily: "Manrope" }}>
                  <X />, <X />,<br /><X /> – <X />,<br /><X /> State, India.
                </p>
              </div>

              <div className="card-soft bg-white">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-[#B85C38]" />
                  <h3 className="text-base font-bold text-[#1A2421]" style={{ fontFamily: "Manrope" }}>Corporate Office</h3>
                </div>
                <p className="mt-3 text-sm text-[#64746C] leading-relaxed mb-0" style={{ fontFamily: "Manrope" }}>
                  <X />, <X />,<br /><X /> – <X />,<br /><X /> State, India.
                </p>
              </div>

              <div className="card-soft bg-[#F3F1EC] border-[#E5E3DB]">
                <div className="flex items-center gap-3">
                  <ShieldAlert size={20} className="text-[#B85C38]" />
                  <h3 className="text-base font-bold text-[#B85C38]" style={{ fontFamily: "Manrope" }}>Grievance Redressal Officer</h3>
                </div>
                <p className="mt-3 text-sm text-[#64746C] leading-relaxed mb-0" style={{ fontFamily: "Manrope" }}>
                  Name: <X /><br />
                  Phone: 879624245<br />
                  Email: grievance@logixfinanceandinvestment.com
                </p>
                <p className="text-xs text-[#64746C] mt-3 mb-0" style={{ fontFamily: "Manrope" }}>
                  For escalation procedure, see{" "}
                  <Link to="/policies/grievance-redressal" className="text-[#1A2421] underline hover:text-[#B85C38]">Grievance Redressal Mechanism</Link>.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="card-soft bg-white">
                <div className="eyebrow">Enquiry Form</div>
                <h2 className="text-2xl md:text-3xl font-light mt-2 text-[#1A2421]" style={{ fontFamily: "Cormorant Garamond" }}>
                  Tell Us How We Can Help
                </h2>
                <p className="text-sm text-[#64746C] mt-2" style={{ fontFamily: "Manrope" }}>Our team will respond within working hours.</p>

                <form onSubmit={submit} data-testid="enquiry-form" className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label" htmlFor="name">Full Name *</label>
                      <input id="name" data-testid="enquiry-name" required type="text" className="field-input"
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="mobile">Mobile Number *</label>
                      <input id="mobile" data-testid="enquiry-mobile" required type="tel" className="field-input"
                        value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="field-label" htmlFor="email">Email *</label>
                      <input id="email" data-testid="enquiry-email" required type="email" className="field-input"
                        value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                    <div>
                      <label className="field-label" htmlFor="city">City *</label>
                      <input id="city" data-testid="enquiry-city" required type="text" className="field-input"
                        value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="field-label" htmlFor="subject">Subject</label>
                    <select id="subject" data-testid="enquiry-subject" className="field-input"
                      value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                      {SUBJECTS.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="field-label" htmlFor="message">Message *</label>
                    <textarea id="message" data-testid="enquiry-message" required rows={5} className="field-input"
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <label className="flex items-start gap-2.5 text-xs text-[#64746C] cursor-pointer" style={{ fontFamily: "Manrope" }}>
                    <input type="checkbox" required data-testid="enquiry-consent" className="mt-0.5"
                      checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
                    <span>
                      I consent to Logix Finance contacting me. I have read the{" "}
                      <Link to="/policies/privacy-policy" className="text-[#1A2421] underline hover:text-[#B85C38]">Privacy Policy</Link> and{" "}
                      <Link to="/policies/terms-conditions" className="text-[#1A2421] underline hover:text-[#B85C38]">Terms &amp; Conditions</Link>.
                    </span>
                  </label>
                  <button type="submit" data-testid="enquiry-submit"
                    disabled={!form.consent || status.state === "sending"}
                    className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
                    {status.state === "sending" ? "Sending..." : (<>Submit Enquiry <Send size={14} /></>)}
                  </button>

                  {status.state === "success" && (
                    <div className="card-soft mt-4" style={{ background: "#e7f7ed", borderColor: "#bfe5cc", fontFamily: "Manrope" }} data-testid="enquiry-success">
                      <strong className="text-[#1f7a3a]">Thank you!</strong>{" "}
                      <span className="text-sm text-[#1A2421]">{status.message}</span>
                    </div>
                  )}
                  {status.state === "error" && (
                    <div className="card-soft mt-4" style={{ background: "#fdecea", borderColor: "#f5c2c0", fontFamily: "Manrope" }} data-testid="enquiry-error">
                      <strong className="text-[#b00020]">Could not send.</strong>{" "}
                      <span className="text-sm text-[#1A2421]">{status.message}</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP placeholder */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="eyebrow mb-3">Find Us</div>
          <div className="card-soft p-0 overflow-hidden" data-testid="map-placeholder">
            <div style={{
              height: 320,
              background: "linear-gradient(135deg, #F3F1EC 0%, #F9F8F6 100%)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div className="text-center" style={{ fontFamily: "Manrope" }}>
                <MapPin size={32} className="text-[#B85C38] mx-auto" />
                <p className="mt-3 font-medium text-[#1A2421]" style={{ fontFamily: "Cormorant Garamond", fontSize: 20 }}>
                  Embedded Google Map
                </p>
                <p className="text-sm text-[#64746C] mt-1">
                  Map for the <X /> office will be embedded here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
