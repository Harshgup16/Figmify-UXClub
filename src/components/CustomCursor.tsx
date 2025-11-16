'use client';

import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isTouchDeviceRef = useRef(false);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    // Check if device is touch-enabled
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    isTouchDeviceRef.current = isTouchDevice;
    
    // If it's a touch device, don't show the cursor
    if (isTouchDevice) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Show cursor when mouse moves
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      // Make cursor visible
      cursor.style.opacity = '1';
    };

    // Handle hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, select') || 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.tagName === 'INPUT' || 
          target.tagName === 'TEXTAREA' || 
          target.tagName === 'SELECT') {
        isHoveredRef.current = true;
        cursor.classList.add('hovered');
      } else {
        isHoveredRef.current = false;
        cursor.classList.remove('hovered');
      }
    };

    // Hide cursor when mouse leaves window
    const handleMouseLeave = () => {
      if (cursor) {
        cursor.style.opacity = '0';
      }
    };

    // Hide cursor on touch devices
    const handleTouchStart = () => {
      if (cursor) {
        cursor.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchStart);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <div 
      ref={cursorRef} 
      className="custom-cursor"
      style={{ opacity: 0 }}
    />
  );
};

export default CustomCursor;