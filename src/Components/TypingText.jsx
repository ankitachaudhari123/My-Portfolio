import React, { useState, useEffect } from 'react';
import './TypingText.css';

const ROLES = [
  'Full Stack Developer',
  'Website Builder',
  'App Developer',
  'Software Engineer',
];

const TypingText = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setText(current.substring(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="typing-text">
      <span className="mono typing-text__bracket">&lt;</span>
      <span className="typing-text__content cursor-blink">{text}</span>
      <span className="mono typing-text__bracket"> /&gt;</span>
    </span>
  );
};

export default TypingText;
