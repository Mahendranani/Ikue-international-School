"use client";

import { useState } from "react";

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("_subject", "New Contact Form Submission!");
    formData.append("_captcha", "false"); // Disables captcha for AJAX

    try {
      const response = await fetch("https://formsubmit.co/ajax/ikueinternationalschool@gmail.com", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        setFormSubmitted(true);
        e.target.reset();
        alert("Contact form submitted successfully!")
      } else {
        alert("Error submitting form.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: "60px" }}>
            <div>
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">We'd Love to Hear From You</h2>
              <p
                style={{
                  color: "var(--text-mid)",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                Whether you have questions about admissions, fees, transport, or
                just want to schedule a campus visit — our team is here to help
                you every step of the way.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  marginBottom: "36px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--maroon)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Our Location
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-light)",
                        lineHeight: 1.6,
                      }}
                    >
                      Gangavathi Road, Hosalli (E.J. Cross),
                      <br />
                      Sindhanur – 584128, Raichur District, Karnataka
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--maroon)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14z" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Phone Numbers
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--text-light)",
                        lineHeight: 1.8,
                      }}
                    >
                      <a
                        href="tel:+919513287861"
                        style={{ color: "var(--maroon)", fontWeight: 600 }}
                      >
                        +91 95132 87861
                      </a>
                      <br />
                      Mon – Sat: 9:00 AM to 5:00 PM
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "var(--maroon)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,12 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontWeight: 700,
                        color: "var(--text-dark)",
                        marginBottom: "4px",
                      }}
                    >
                      Email Address
                    </h4>
                    <p style={{ fontSize: "14px" }}>
                      <a
                        href="mailto:ikueinternationalschool@gmail.com"
                        style={{ color: "var(--maroon)", fontWeight: 600 }}
                      >
                        ikueinternationalschool@gmail.com
                      </a>
                      <br />
                      <span
                        style={{ color: "var(--text-light)", fontSize: "13px" }}
                      >
                        We respond within 24 working hours.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "var(--off-white)",
                  borderRadius: "4px",
                  padding: "28px",
                  border: "1px solid var(--border)",
                }}
              >
                <h4
                  style={{
                    fontWeight: 700,
                    color: "var(--text-dark)",
                    marginBottom: "16px",
                  }}
                >
                  School Hours & Timings
                </h4>
                <table
                  style={{
                    width: "100%",
                    fontSize: "13.5px",
                    borderCollapse: "collapse",
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          padding: "8px 0",
                          color: "var(--text-mid)",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        Office Hours
                      </td>
                      <td
                        style={{
                          padding: "8px 0",
                          fontWeight: 600,
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        Mon–Sat: 9:00 AM – 5:00 PM
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "8px 0",
                          color: "var(--text-mid)",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        School Hours
                      </td>
                      <td
                        style={{
                          padding: "8px 0",
                          fontWeight: 600,
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        8:00 AM – 3:30 PM
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          padding: "8px 0",
                          color: "var(--text-mid)",
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        PU College Hours
                      </td>
                      <td
                        style={{
                          padding: "8px 0",
                          fontWeight: 600,
                          borderBottom: "1px solid var(--border)",
                        }}
                      >
                        7:30 AM – 5:30 PM (with coaching)
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{ padding: "8px 0", color: "var(--text-mid)" }}
                      >
                        Sunday
                      </td>
                      <td
                        style={{
                          padding: "8px 0",
                          fontWeight: 600,
                          color: "var(--text-light)",
                        }}
                      >
                        Closed
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="form-wrapper">
              {formSubmitted && (
                <div
                  className="alert alert-success"
                  style={{ display: "block" }}
                >
                  ✓ Message sent! We'll get back to you within 24 hours.
                </div>
              )}
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  padding: "36px",
                  boxShadow: "var(--shadow-sm)",
                }}
                suppressHydrationWarning
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "26px",
                    color: "var(--maroon-dark)",
                    marginBottom: "24px",
                  }}
                >
                  Send a Message
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "18px",
                  }}
                >
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full name"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="+91 00000 00000"
                      required
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="you@email.com"
                    suppressHydrationWarning
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <select
                    name="subject"
                    className="form-control"
                    suppressHydrationWarning
                  >
                    <option>General Enquiry</option>
                    <option>Admission Query</option>
                    <option>Fee Structure</option>
                    <option>Transport & Routes</option>
                    <option>Campus Visit Request</option>
                    <option>Student Welfare</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="How can we help you?"
                    required
                    suppressHydrationWarning
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  suppressHydrationWarning
                >
                  Send Message →
                </button>
              </form>

              <div
                style={{
                  background: "var(--maroon)",
                  borderRadius: "4px",
                  padding: "24px",
                  marginTop: "20px",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "15px",
                      marginBottom: "4px",
                      paddingLeft: "4px",
                    }}
                  >
                    Find Us on Google Maps
                  </div>
                  <p
                    style={{
                      fontSize: "13px",
                      opacity: 0.8,
                      marginBottom: "10px",
                    }}
                  >
                    Gangavathi Road, Hosalli, Sindhanur - 584128
                  </p>
                  <a
                    href="https://maps.google.com/?q=IKUE+International+School+Sindhanur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-leaf"
                    style={{ fontSize: "12px", padding: "8px 16px" }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
