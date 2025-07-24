"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const BentoGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
      className
    )}
    {...props}
  />
));
BentoGrid.displayName = "BentoGrid";

const BentoCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    Icon?: React.ComponentType<{ className?: string }>;
    name?: string;
    description?: string;
    href?: string;
    cta?: string;
    background?: React.ReactNode;
  }
>(({ className, Icon, name, description, href, cta, background, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative overflow-hidden rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300",
      className
    )}
    {...props}
  >
    {background && (
      <div className="absolute inset-0 -z-10">
        {background}
      </div>
    )}
    <div className="relative z-10">
      {Icon && (
        <Icon className="h-8 w-8 mb-4 text-foreground/80 group-hover:text-foreground transition-colors" />
      )}
      {name && (
        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-foreground/90 transition-colors">
          {name}
        </h3>
      )}
      {description && (
        <p className="text-sm text-foreground/70 group-hover:text-foreground/80 transition-colors mb-4">
          {description}
        </p>
      )}
      {href && cta && (
        <a
          href={href}
          className="inline-flex items-center text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
        >
          {cta}
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      )}
    </div>
  </div>
));
BentoCard.displayName = "BentoCard";

export { BentoGrid, BentoCard }; 