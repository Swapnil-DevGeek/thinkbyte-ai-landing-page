import { cn } from "@/lib/utils";
import React from "react";

const Marquee = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { 
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  className?: string;
  children?: React.ReactNode;
}>(({
  className,
  pauseOnHover = false,
  reverse = false,
  vertical = false,
  children,
  ...props
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group relative flex overflow-hidden [--duration:40s] [--gap:1rem]",
        { "flex-row": !vertical, "flex-col": vertical },
        className
      )}
      {...props}
    >
      {/* Blurred edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      
      <div
        className={cn(
          "flex items-center gap-[var(--gap)]",
          {
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "animate-marquee-horizontal": !vertical,
            "animate-marquee-vertical": vertical,
            "[animation-direction:reverse]": reverse,
            "[animation-direction:normal]": !reverse,
          }
        )}
        style={{
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationDuration: 'var(--duration)',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
});

Marquee.displayName = "Marquee";

export { Marquee };
