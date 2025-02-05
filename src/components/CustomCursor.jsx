import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const targetElement = e.target;
      if (
        targetElement.tagName.toLowerCase() === 'a' ||
        targetElement.tagName.toLowerCase() === 'button' ||
        targetElement.getAttribute('role') === 'button' ||
        targetElement.tagName.toLowerCase() === 'input' ||
        targetElement.classList.contains('clickable')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          width: isHovering ? '50px' : '20px',
          height: isHovering ? '50px' : '20px',
          backgroundColor: 'transparent',
          border: '2px solid rgba(255, 255, 255, 0.8)',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          transform: `translate(${position.x - (isHovering ? 25 : 10)}px, ${position.y - (isHovering ? 25 : 10)}px)`,
          transition: 'width 0.3s, height 0.3s, transform 0.1s',
          zIndex: 9999,
          mixBlendMode: 'exclusion',
        }}
      />
      
      {/* Middle ring */}
      <div
        style={{
          width: isHovering ? '35px' : '12px',
          height: isHovering ? '35px' : '12px',
          border: '1px solid rgba(168, 85, 247, 0.8)',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          transform: `translate(${position.x - (isHovering ? 17.5 : 6)}px, ${position.y - (isHovering ? 17.5 : 6)}px)`,
          transition: 'width 0.3s, height 0.3s, transform 0.1s',
          zIndex: 9999,
          opacity: 0.8,
        }}
      />
      
      {/* Inner dot */}
      <div
        style={{
          width: isClicking ? '4px' : '6px',
          height: isClicking ? '4px' : '6px',
          backgroundColor: '#fff',
          borderRadius: '50%',
          position: 'fixed',
          pointerEvents: 'none',
          transform: `translate(${position.x - 3}px, ${position.y - 3}px)`,
          transition: 'width 0.2s, height 0.2s, transform 0.1s',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(168, 85, 247, 0.6)',
        }}
      />
    </>
  );
};

export default CustomCursor; 