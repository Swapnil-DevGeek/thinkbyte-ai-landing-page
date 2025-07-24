"use client";

import { useEffect, useRef } from "react";

export function Ripple() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createRipple = (x: number, y: number) => {
      const ripple = document.createElement("div");
      ripple.style.position = "absolute";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = "0";
      ripple.style.height = "0";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)";
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.transition = "all 2s ease-out";
      ripple.style.pointerEvents = "none";

      container.appendChild(ripple);

      // Trigger animation
      setTimeout(() => {
        ripple.style.width = "400px";
        ripple.style.height = "400px";
        ripple.style.opacity = "0";
      }, 10);

      // Remove ripple after animation
      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.parentNode.removeChild(ripple);
        }
      }, 2000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createRipple(x, y);
    };

    // Create random ripples
    const createRandomRipple = () => {
      const rect = container.getBoundingClientRect();
      const x = Math.random() * rect.width;
      const y = Math.random() * rect.height;
      createRipple(x, y);
    };

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove);
    
    // Create random ripples every 3 seconds
    const interval = setInterval(createRandomRipple, 3000);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
    />
  );
} 