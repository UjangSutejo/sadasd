"use client";

const EASING = "cubic-bezier(0.23, 1, 0.32, 1)";

interface MenuRevealTextProps {
  text?: string;
  reveal: boolean;
  staggerMs?: number;
  animDuration?: number;
  startDelay?: number;
  className?: string;
}

export default function MenuRevealText(props: MenuRevealTextProps) {
  const {
    text = "",
    reveal,
    staggerMs = 60,
    animDuration = 600,
    startDelay = 0,
    className = "",
  } = props;

  const words = String(text ?? "").split(" ");

  let tokenIndex = 0;

  const getWordStyle = (index: number): React.CSSProperties => {
    const delay = startDelay + index * staggerMs;
    const transition = `transform ${animDuration}ms ${EASING} ${delay}ms, opacity ${animDuration}ms ease ${delay}ms`;

    return {
      display: "inline-block",
      verticalAlign: "top",
      transition,
      opacity: reveal ? 1 : 0,
      transform: reveal ? "translateY(0)" : "translateY(110%)",
    };
  };

  return (
    <span className={className}>
      {words.map((word, wi) => {
        const idx = tokenIndex++;
        return (
          <span key={wi} style={{ overflow: "hidden", display: "inline-block", verticalAlign: "top", marginRight: wi < words.length - 1 ? "0.3em" : 0 }}>
            <span style={getWordStyle(idx)}>{word}</span>
          </span>
        );
      })}
    </span>
  );
}
