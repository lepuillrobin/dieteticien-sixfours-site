"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delayMs?: number;
  once?: boolean;
};

export default function Reveal<T extends React.ElementType = "div">({
  as,
  children,
  className,
  style,
  delayMs = 0,
  once = true,
}: RevealProps<T>) {
  const Comp = (as || "div") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  return (
    <Comp
      ref={ref as any}
      className={`jq-reveal ${visible ? "is-visible" : ""} ${className || ""}`.trim()}
      style={{
        transitionDelay: `${delayMs}ms`,
        ...style,
      }}
    >
      {children}
    </Comp>
  );
}
