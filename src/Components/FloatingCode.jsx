import React from 'react';
import './FloatingCode.css';

const SYMBOLS = [
  { text: '{ }', top: '12%', left: '8%', delay: '0s', duration: '7s' },
  { text: '</>', top: '22%', right: '12%', delay: '1s', duration: '9s' },
  { text: '();', top: '55%', left: '5%', delay: '2s', duration: '8s' },
  { text: '=>', top: '70%', right: '8%', delay: '0.5s', duration: '6s' },
  { text: '[]', top: '40%', right: '5%', delay: '1.5s', duration: '10s' },
  { text: 'npm', top: '80%', left: '15%', delay: '3s', duration: '11s' },
  { text: 'git', top: '8%', right: '25%', delay: '2.5s', duration: '7s' },
];

const FloatingCode = () => (
  <div className="floating-code" aria-hidden="true">
    {SYMBOLS.map((s) => (
      <span
        key={s.text}
        className="floating-code__symbol mono"
        style={{
          top: s.top,
          left: s.left,
          right: s.right,
          '--float-delay': s.delay,
          '--float-duration': s.duration,
        }}
      >
        {s.text}
      </span>
    ))}
  </div>
);

export default FloatingCode;
