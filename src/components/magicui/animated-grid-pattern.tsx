"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
}

export function AnimatedGridPattern({
  numSquares = 30,
  maxOpacity = 0.1,
  duration = 3,
  repeatDelay = 1,
  className,
}: AnimatedGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const squares: HTMLDivElement[] = [];
    const containerRect = container.getBoundingClientRect();

    // Create squares
    for (let i = 0; i < numSquares; i++) {
      const square = document.createElement("div");
      square.style.position = "absolute";
      square.style.width = "2px";
      square.style.height = "2px";
      square.style.backgroundColor = "currentColor";
      square.style.borderRadius = "1px";
      square.style.opacity = "0";
      square.style.transition = `opacity ${duration}s ease-in-out`;

      // Random position
      const x = Math.random() * containerRect.width;
      const y = Math.random() * containerRect.height;
      square.style.left = `${x}px`;
      square.style.top = `${y}px`;

      container.appendChild(square);
      squares.push(square);
    }

    // Animate squares
    let currentIndex = 0;
    const animate = () => {
      // Reset all squares
      squares.forEach((square) => {
        square.style.opacity = "0";
      });

      // Show current square
      if (squares[currentIndex]) {
        squares[currentIndex].style.opacity = maxOpacity.toString();
      }

      currentIndex = (currentIndex + 1) % squares.length;

      setTimeout(animate, (duration + repeatDelay) * 1000);
    };

    animate();

    // Cleanup
    return () => {
      squares.forEach((square) => {
        if (square.parentNode) {
          square.parentNode.removeChild(square);
        }
      });
    };
  }, [numSquares, maxOpacity, duration, repeatDelay]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", className)}
    />
  );
} 