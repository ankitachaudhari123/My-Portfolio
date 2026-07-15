import React, { useState } from 'react';
import './Contact.css';
import SectionTitle from './SectionTitle';
import AnimateOnScroll from './AnimateOnScroll';
import ContactForm from './ContactForm';
import { CiMail, CiLinkedin, CiInstagram } from "react-icons/ci";

const EMAIL = 'ankitachaudhari631@gmail.com';

const contacts = [
  {
    icon: CiMail,
    label: EMAIL,
    href: `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${EMAIL}`,
    copyable: true,
  },
  {
    icon: CiLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankita-chaudhari-6650b3273/",
  },
  {
    icon: CiInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/an_kita_30/",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(`mailto:${EMAIL}`, '_blank');
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section">
        <SectionTitle>Contact</SectionTitle>

        <AnimateOnScroll animation="fade-up">
          <p className="contact__intro">
            Thank you for taking the time to explore my portfolio. If you have any inquiries,
            collaboration opportunities, or simply want to get in touch, feel free to reach out
            using the following methods:
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <ContactForm />
        </AnimateOnScroll>

        {copied && <div className="contact__toast">Email copied to clipboard!</div>}

        <div className="contact__cards">
          {contacts.map(({ icon: Icon, label, href, copyable }, i) => (
            <AnimateOnScroll key={label} animation="zoom-in" delay={i * 120}>
              {copyable ? (
                <button type="button" onClick={handleEmailClick} className="contact-card">
                  <div className="contact-card__icon icon-float" style={{ '--float-delay': `${i * 0.4}s` }}>
                    <Icon size={28} />
                  </div>
                  <span className="contact-card__label">{label}</span>
                  <span className="contact-card__hint">Tap to copy email</span>
                </button>
              ) : (
                <a href={href} target="_blank" rel="noreferrer" className="contact-card">
                  <div className="contact-card__icon icon-float" style={{ '--float-delay': `${i * 0.4}s` }}>
                    <Icon size={28} />
                  </div>
                  <span className="contact-card__label">{label}</span>
                </a>
              )}
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <p className="contact__outro">
            I value open communication and am always eager to connect with fellow professionals
            and enthusiasts in the field. Whether you have feedback, questions, or exciting
            projects to discuss, I look forward to hearing from you!
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
