import React, { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ children, animation = 'fade-up', delay = 0, className = '' }) => {
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`aos aos--${animation} ${visible ? 'aos--visible' : ''} ${className}`}
      style={{ '--aos-delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
