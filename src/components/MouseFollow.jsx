import React, { useEffect, useRef } from 'react';

const MouseFollow = () => {

	const cursorRef = useRef(null);

  const settings = {
    mouseX: 0,
    mouseY: 0,
    xPos: 0,
    yPos: 0,
    speed: 100,
  };

  const cursorWidth = cursorRef.current ? cursorRef.current.offsetWidth : 30;
  const cursorHeight = cursorRef.current ? cursorRef.current.offsetHeight : 30;

  useEffect(() => {
    const animate = () => {
      settings.xPos += (settings.mouseX - settings.xPos) / settings.speed;
      settings.yPos += (settings.mouseY - settings.yPos) / settings.speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${settings.xPos - cursorWidth / 2}px, ${settings.yPos - cursorHeight / 2}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      settings.mouseX = e.pageX;
      settings.mouseY = e.pageY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [settings]);

	return (
		<>
		 {/* <div className="h-screen w-screen grid place-content-center overflow-hidden m-0 relative"> */}
      <div
        id="cursor"
        ref={cursorRef}
        className="absolute w-8 h-8  rounded-full bg-cover mix-blend-darken transition-transform duration-300 z-50 drop-shadow-[0_0_10px_rgba(0,0,0)]"
        style={{ backgroundImage: "url('./image/chatgpt.png')" }}
      ></div>

    {/* </div> */}
		</>
	)
}

export default MouseFollow