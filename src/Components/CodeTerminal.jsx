import React, { useState, useEffect } from 'react';
import './CodeTerminal.css';

const LINES = [
  { type: 'cmd', text: '$ whoami' },
  { type: 'out', text: '→ Ankita Chaudhari' },
  { type: 'cmd', text: '$ cat role.txt' },
  { type: 'out', text: '→ Full Stack Developer' },
  { type: 'cmd', text: '$ ls builds/' },
  { type: 'out', text: '→ websites  apps  software' },
  { type: 'cmd', text: '$ cat experience.txt' },
  { type: 'out', text: '→ Web: 4.7y  Apps: 3.5y  Software: 1.2y' },
  { type: 'cmd', text: '$ ls skills/' },
  { type: 'out', text: '→ HTML CSS JS PHP Ajax React Flutter Node' },
  { type: 'out', text: '→ MySQL PostgreSQL Supabase MongoDB' },
  { type: 'cmd', text: '$ git status' },
  { type: 'out', text: '→ On branch: open-to-work ✓' },
];

const CodeTerminal = () => {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LINES.length) {
      const reset = setTimeout(() => setVisibleLines(0), 4000);
      return () => clearTimeout(reset);
    }
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 600);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="terminal hero-enter" style={{ '--enter-delay': '900ms' }}>
      <div className="terminal__bar">
        <span className="terminal__dot terminal__dot--red"></span>
        <span className="terminal__dot terminal__dot--yellow"></span>
        <span className="terminal__dot terminal__dot--green"></span>
        <span className="terminal__title mono">developer.js</span>
      </div>
      <div className="terminal__body mono">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div
            key={i}
            className={`terminal__line terminal__line--${line.type}`}
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {line.text}
          </div>
        ))}
        <div className="terminal__cursor-line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default CodeTerminal;
