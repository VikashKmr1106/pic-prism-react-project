// src/components/PageTransition.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const pageRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      pageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    return () => {
      animation.kill();
    };
  }, [location]);

  return (
    <div ref={pageRef}>
      {children}
    </div>
  );
};

export default PageTransition;
