"use client";

import { useRef, useEffect, useState } from "react";

const EASING = "cubic-bezier(0.23, 1, 0.32, 1)";

type AnimationStyle = "fade-up" | "mask" | "blur" | "scale";
type SplitMode = "word" | "letter";

interface ScrollRevealTextProps {
  text?: string;
  splitMode?: SplitMode;
  animationStyle?: AnimationStyle;
  triggerOnce?: boolean;
  staggerMs?: number;
  animDuration?: number;
  startDelay?: number;
  threshold?: number;
  className?: string;
}

const MOTION_PROPS: Record<AnimationStyle, string[]> = {
  "fade-up": ["transform", "opacity"],
  mask: ["transform"],
  blur: ["opacity", "filter"],
  scale: ["transform", "opacity"],
};

const getReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ScrollRevealText(props: ScrollRevealTextProps) {
  const {
    text = "",
    splitMode = "word",
    animationStyle = "fade-up",
    triggerOnce = true,
    staggerMs = 60,
    animDuration = 800,
    startDelay = 0,
    threshold = 25,
    className = "",
  } = props;

  const rootRef = useRef<HTMLDivElement | null>(null);
  const [reducedMotion, setReducedMotion] = useState(getReducedMotion);
  const [isRevealed, setIsRevealed] = useState(() => getReducedMotion());

  const noMotion = reducedMotion;

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function")
      return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (noMotion) {
      setIsRevealed(true);
      return;
    }
    if (!rootRef.current || typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsRevealed(true);
            if (triggerOnce) obs.disconnect();
          } else if (!triggerOnce) {
            setIsRevealed(false);
          }
        });
      },
      { threshold: Math.max(0, Math.min(1, threshold / 100)) }
    );
    obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, [noMotion, triggerOnce, threshold]);

  const content = String(text ?? "");
  const lines = content.split("\n");

  const getInnerStyle = (index: number): React.CSSProperties => {
    if (noMotion) {
      return { display: "inline-block", transition: "none" };
    }

    const delay = startDelay + index * staggerMs;
    const animProps = MOTION_PROPS[animationStyle] || [];
    const transition = animProps
      .map(
        (p) =>
          `${p} ${animDuration}ms ${p === "transform" ? EASING : "ease"} ${delay}ms`
      )
      .join(", ");

    const base: React.CSSProperties = {
      display: "inline-block",
      transition,
    };

    switch (animationStyle) {
      case "fade-up":
        return {
          ...base,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? "translateY(0)" : "translateY(0.4em)",
        };
      case "mask":
        return {
          ...base,
          transform: isRevealed ? "translateY(0)" : "translateY(110%)",
        };
      case "blur":
        return {
          ...base,
          opacity: isRevealed ? 1 : 0,
          filter: isRevealed ? "blur(0px)" : "blur(10px)",
        };
      case "scale":
        return {
          ...base,
          opacity: isRevealed ? 1 : 0,
          transform: isRevealed ? "scale(1)" : "scale(0.8)",
          transformOrigin: "center bottom",
        };
      default:
        return base;
    }
  };

  const getOuterStyle = (): React.CSSProperties => {
    if (animationStyle !== "mask") {
      return { display: "inline-block", verticalAlign: "top" };
    }
    return {
      display: "inline-block",
      verticalAlign: "top",
      marginRight: "0.04em",
    };
  };

  const getWordWrapperStyle = (): React.CSSProperties => {
    if (animationStyle !== "mask") {
      return {};
    }
    return {
      overflow: "hidden",
      display: "inline-block",
      verticalAlign: "top",
      paddingBottom: "0.10em",
      marginBottom: "-0.10em",
      paddingRight: "0.10em",
      paddingLeft: "0.10em",
    };
  };

  let tokenIndex = 0;

  const renderWord = (word: string, wordKey: string) => {
    if (splitMode === "letter") {
      const letters = Array.from(word);
      return (
        <span
          key={wordKey}
          style={getWordWrapperStyle()}
        >
          <span style={{ display: "inline-block", whiteSpace: "nowrap", verticalAlign: "top" }}>
            {letters.map((ch, li) => {
              const idx = tokenIndex++;
              return (
                <span key={`${wordKey}-${li}`} style={getOuterStyle()}>
                  <span style={getInnerStyle(idx)}>{ch}</span>
                </span>
              );
            })}
          </span>
        </span>
      );
    }

    const idx = tokenIndex++;
    return (
      <span key={wordKey} style={getWordWrapperStyle()}>
        <span style={getOuterStyle()}>
          <span style={getInnerStyle(idx)}>{word}</span>
        </span>
      </span>
    );
  };

  return (
    <div ref={rootRef} className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(/\s+/).filter((p) => p !== "");
        return (
          <span key={`line-${lineIdx}`} style={{ display: "block" }}>
            {words.map((word, wordIdx) => {
              return (
                <span key={`w-${lineIdx}-${wordIdx}`} style={{ display: "inline-block", marginRight: "0.10em" }}>
                  {renderWord(word, `w-${lineIdx}-${wordIdx}`)}
                </span>
              );
            })}
          </span>
        );
      })}
    </div>
  );
}
