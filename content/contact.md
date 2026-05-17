---
title: "Contact Us"
description: "We are here to help. Reach out to the Kilimo team."
layout: "page"
type: "page"
---

<div class="contact-info">
  <h2>Get in touch</h2>
  <p>Have a question about Kilimo, need help with your account, or want to share feedback? We would love to hear from you.</p>

  <div class="contact-methods">
    <div class="contact-method">
      <div class="contact-method-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
        </svg>
      </div>
      <div class="contact-method-body">
        <h4>Email Support</h4>
        <a href="mailto:support@kilimo.app">support@kilimo.app</a>
      </div>
    </div>
    <div class="contact-method">
      <div class="contact-method-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
      </div>
      <div class="contact-method-body">
        <h4>Based in</h4>
        <p>Nairobi, Kenya</p>
      </div>
    </div>
    <div class="contact-method">
      <div class="contact-method-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
      <div class="contact-method-body">
        <h4>Response Time</h4>
        <p>We aim to respond within 2 business days</p>
      </div>
    </div>
  </div>
</div>

<div class="contact-form-card">
  <h3>Send us a message</h3>
  <p id="form-success" hidden style="color: var(--color-primary); margin-bottom: 1rem; font-weight: 500;">
    Thank you. Your message has been received. We will get back to you shortly.
  </p>
  <form id="contact-form" novalidate>
    <div class="form-row">
      <div class="form-group">
        <label for="first-name">First name</label>
        <input type="text" id="first-name" name="first_name" autocomplete="given-name" required>
      </div>
      <div class="form-group">
        <label for="last-name">Last name</label>
        <input type="text" id="last-name" name="last_name" autocomplete="family-name" required>
      </div>
    </div>
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" id="email" name="email" autocomplete="email" required>
    </div>
    <div class="form-group">
      <label for="subject">Subject</label>
      <select id="subject" name="subject">
        <option value="">Select a topic</option>
        <option value="support">App support</option>
        <option value="account">Account or billing</option>
        <option value="feedback">Feature feedback</option>
        <option value="partnership">Partnership enquiry</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" placeholder="Describe your question or feedback..." required></textarea>
    </div>
    <div class="form-submit">
      <button type="submit" class="btn btn-solid">Send message</button>
    </div>
  </form>
</div>
