import React from "react";
import { motion, useTransform } from "framer-motion";

function Word({ word, progress, from, to, className }) {
  const opacity = useTransform(progress, [from, to], [0.08, 1]);
  const y = useTransform(progress, [from, to], [16, 0]);
  return (
    <motion.span style={{ opacity, y }} className={`inline-block ${className}`}>
      {word}
    </motion.span>
  );
}

// Reveals a line of text word-by-word, driven by scroll progress (0–1) between `start` and `end`.
export default function ScrollWords({ text, progress, start, end, className = "", wordClassName = "" }) {
  const words = text.split(" ");
  const step = (end - start) / words.length;
  return (
    <span className={className}>
      {words.map((w, i) => (
        <React.Fragment key={`${w}-${i}`}>
          <Word
            word={w}
            progress={progress}
            from={start + step * i}
            to={Math.min(end, start + step * (i + 1.8))}
            className={wordClassName}
          />{" "}
        </React.Fragment>
      ))}
    </span>
  );
}