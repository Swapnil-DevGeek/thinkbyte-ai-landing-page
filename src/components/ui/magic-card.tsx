import { cn } from "@/lib/utils";
import { ReactElement, useRef } from "react";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  style?: React.CSSProperties;
}

export const MagicCard = ({
  children,
  className,
  gradientColor = "#262626",
  style,
}: MagicCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-6",
        "before:absolute before:inset-0 before:size-full before:opacity-0 before:transition-opacity before:duration-500 before:content-['']",
        "before:bg-[radial-gradient(600px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_40%)]",
        "hover:before:opacity-100",
        className
      )}
      style={
        {
          "--gradient-color": gradientColor,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};