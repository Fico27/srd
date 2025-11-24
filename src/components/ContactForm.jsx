import React, { useEffect, useRef, useState } from "react";
import "./contact-form.css";

export default function ContactForm() {
  const formRef = useRef(null);
  const [readyAt] = useState(Date.now());

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const onSubmit = (e) => {
    const elapsed = Date.now() - readyAt;
    const hp = formRef.current?.querySelector('input[name="website"]');

    // Simple spam checks
    if (elapsed < 3000) {
      e.preventDefault();
      alert("Please take a moment before submitting.");
      return;
    }
    if (hp && hp.value.trim().length > 0) {
      e.preventDefault();
      alert("Spam detected.");
      return;
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      action="https://formspree.io/f/mkgagyoa"
      method="POST"
      className="contact-form"
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        autoComplete="off"
        tabIndex="-1"
        style={{ display: "none" }}
      />

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" required maxLength="100" />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          required
          minLength="10"
          maxLength="5000"
        ></textarea>
      </div>

      {/* Cloudflare Turnstile */}
      <div
        className="cf-turnstile"
        data-sitekey="YOUR_TURNSTILE_SITE_KEY"
      ></div>

      <button type="submit">Send</button>
    </form>
  );
}
