import React, { useState } from 'react';
import './ContactForm.css';

const EMAIL = 'ankitachaudhari631@gmail.com';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `Hi Ankita,\n\n${form.message}\n\n— ${form.name}\n${form.email}`;
    const mailto = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${EMAIL}&su=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="contact-form__input"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={handleChange}
        required
        className="contact-form__input"
      />
      <textarea
        name="message"
        placeholder="Your Message..."
        value={form.message}
        onChange={handleChange}
        required
        rows={5}
        className="contact-form__input contact-form__textarea"
      />
      <button type="submit" className="btn-primary btn-shine contact-form__submit">
        {sent ? 'Opening email...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
