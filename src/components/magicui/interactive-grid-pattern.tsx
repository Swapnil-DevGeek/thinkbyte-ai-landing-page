"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface InteractiveGridPatternProps {
  className?: string;
  gridSize?: number;
  maxOpacity?: number;
  duration?: number;
}

export function InteractiveGridPattern({
  className,
  gridSize = 20,
  maxOpacity = 0.1,
  duration = 0.5,
}: InteractiveGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cells: HTMLDivElement[] = [];
    const containerRect = container.getBoundingClientRect();
    const cellWidth = containerRect.width / gridSize;
    const cellHeight = containerRect.height / gridSize;

    // Create grid cells
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const cell = document.createElement("div");
        cell.style.position = "absolute";
        cell.style.left = `${col * cellWidth}px`;
        cell.style.top = `${row * cellHeight}px`;
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;
        cell.style.backgroundColor = "currentColor";
        cell.style.opacity = "0";
        cell.style.transition = `opacity ${duration}s ease-out`;
        cell.style.border = "1px solid rgba(255,255,255,0.05)";

        container.appendChild(cell);
        cells.push(cell);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate which cell the mouse is in
      const col = Math.floor(x / cellWidth);
      const row = Math.floor(y / cellHeight);

      // Reset all cells
      cells.forEach((cell) => {
        cell.style.opacity = "0";
      });

      // Highlight cells around the mouse
      for (let r = Math.max(0, row - 2); r <= Math.min(gridSize - 1, row + 2); r++) {
        for (let c = Math.max(0, col - 2); c <= Math.min(gridSize - 1, col + 2); c++) {
          const index = r * gridSize + c;
          if (cells[index]) {
            const distance = Math.sqrt((r - row) ** 2 + (c - col) ** 2);
            const opacity = Math.max(0, maxOpacity * (1 - distance / 3));
            cells[index].style.opacity = opacity.toString();
          }
        }
      }
    };

    // Add event listeners
    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", () => {
      cells.forEach((cell) => {
        cell.style.opacity = "0";
      });
    });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", () => {});
      cells.forEach((cell) => {
        if (cell.parentNode) {
          cell.parentNode.removeChild(cell);
        }
      });
    };
  }, [gridSize, maxOpacity, duration]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full", className)}
    />
  );
} 