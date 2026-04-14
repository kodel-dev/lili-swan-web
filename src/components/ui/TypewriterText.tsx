"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypewriterText({ 
  text, 
  speed = 50, 
  className = "",
  onComplete 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-6 md:h-8 bg-primary-pink ml-1"
      />
    </motion.span>
  );
}

interface TypewriterQuoteProps {
  quotes: string[];
  interval?: number;
  className?: string;
}

export function TypewriterQuote({ 
  quotes, 
  interval = 3000, 
  className = "" 
}: TypewriterQuoteProps) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(false);
    }, interval);

    return () => clearTimeout(timeout);
  }, [currentQuoteIndex, interval]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
        setIsTyping(true);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, quotes.length]);

  return (
    <div className={`text-center ${className}`}>
      <TypewriterText
        text={quotes[currentQuoteIndex]}
        speed={80}
        onComplete={() => setIsTyping(false)}
      />
    </div>
  );
}