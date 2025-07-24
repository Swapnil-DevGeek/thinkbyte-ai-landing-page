"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface DotPatternProps {
  className?: string;
  numDots?: number;
  maxOpacity?: number;
  duration?: number;
}

export function DotPattern({
  className,
  numDots = 50,
  maxOpacity = 0.1,
  duration = 4,
}: DotPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const dots: HTMLDivElement[] = [];
    const containerRect = container.getBoundingClientRect();

    // Create dots
    for (let i = 0; i < numDots; i++) {
      const dot = document.createElement("div");
      dot.style.position = "absolute";
      dot.style.width = "4px";
      dot.style.height = "4px";
      dot.style.backgroundColor = "currentColor";
      dot.style.borderRadius = "50%";
      dot.style.opacity = "0";
      dot.style.transition = `opacity ${duration}s ease-in-out`;

      // Random position
      const x = Math.random() * containerRect.width;
      const y = Math.random() * containerRect.height;
      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      container.appendChild(dot);
      dots.push(dot);
    }

    // Animate dots in sequence
    let currentIndex = 0;
    const animate = () => {
      // Reset all dots
      dots.forEach((dot) => {
        dot.style.opacity = "0";
      });

      // Show current dot
      if (dots[currentIndex]) {
        dots[currentIndex].style.opacity = maxOpacity.toString();
      }

      currentIndex = (currentIndex + 1) % dots.length;

      setTimeout(animate, (duration * 1000) / numDots);
    };

    animate();

    // Cleanup
    return () => {
      dots.forEach((dot) => {
        if (dot.parentNode) {
          dot.parentNode.removeChild(dot);
        }
      });
    };
  }, [numDots, maxOpacity, duration]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", className)}
    />
  );
} 