import React, { useEffect, useRef, useState } from 'react';

const SectionTitle = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`section-title ${visible ? 'section-title--visible' : ''}`}>
      <h2 className={visible ? 'aos aos--fade-right aos--visible' : 'aos aos--fade-right'}>{children}</h2>
      <span className="dot"></span>
      <div className="line"></div>
    </div>
  );
};

export default SectionTitle;
