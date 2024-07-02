import React, { useEffect, useState } from 'react';
import { IoMdArrowUp } from "react-icons/io";
const ScrollToTop = () => {
	const [scrollValue, setScrollValue] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const calcScrollValue = () => {
      const pos = document.documentElement.scrollTop;
      const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);

      setScrollValue(scrollValue);

      if (pos > 100) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', calcScrollValue);

    return () => {
      window.removeEventListener('scroll', calcScrollValue);
    };
  }, []);

  const handleClick = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="progress" className={`fixed bottom-5 right-5 h-12 w-12 grid place-items-center rounded-full cursor-pointer transition-all duration-200 ${showScroll ? 'grid' : 'hidden'}`} style={{
        background: `conic-gradient(#232323 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`,}} onClick={handleClick}>
      <span  id="progress-value" className=" h-[calc(100%-5px)] w-[calc(100%-5px)] bg-white rounded-full grid place-items-center text-2xl text-gray-800 transition-all duration-200">
        <IoMdArrowUp />
      </span>
    </div>
  );
};



export default ScrollToTop