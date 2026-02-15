"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** tag HTML (div/section/h2/...) */
  as?: React.ElementType;
  className?: string;
  /** délai en ms (optionnel) */
  delay?: number;
  /** animation jouée une seule fois (par défaut oui) */
  once?: boolean;
  /** distance Y en px (par défaut 14) */
  y?: number;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  once = true,
  y = 14,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const style = useMemo(
    () =>
      ({
        ["--reveal-delay" as any]: `${delay}ms`,
        ["--reveal-y" as any]: `${y}px`,
      }) as React.CSSProperties,
    [delay, y]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref as any}
      style={style}
      className={`jq-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
