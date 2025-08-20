'use client';

import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for cursor movement
    window.addEventListener('mousemove', updatePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor-circle"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: isHovering ? 'scale(2)' : 'scale(1)',
        }}
      />
      <div
        className="cursor-dot"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      />
    </>
  );
};