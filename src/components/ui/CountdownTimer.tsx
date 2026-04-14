"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { calculateDaysTogether, calculateDaysUntilBirthday } from "@/lib/dates";

interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface FlipNumberProps {
  value: number;
  label: string;
}

function FlipNumber({ value, label }: FlipNumberProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <motion.div
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="text-4xl md:text-6xl font-display font-bold text-white"
        >
          {value.toString().padStart(2, "0")}
        </motion.div>
      </div>
      <span className="text-xs md:text-sm text-white/50 uppercase tracking-widest mt-2">
        {label}
      </span>
    </div>
  );
}

export function DaysTogetherCounter() {
  const [time, setTime] = useState<TimeUnits>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTimer = () => {
      setTime(calculateDaysTogether());
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-display text-white/80 mb-8">
        Sudah Bersama
      </h2>
      <div className="flex gap-4 md:gap-8">
        <FlipNumber value={time.days} label="Hari" />
        <div className="text-4xl md:text-6xl text-primary-pink/50 self-start mt-2">:</div>
        <FlipNumber value={time.hours} label="Jam" />
        <div className="text-4xl md:text-6xl text-primary-pink/50 self-start mt-2">:</div>
        <FlipNumber value={time.minutes} label="Menit" />
        <div className="text-4xl md:text-6xl text-primary-pink/50 self-start mt-2">:</div>
        <FlipNumber value={time.seconds} label="Detik" />
      </div>
    </div>
  );
}

export function BirthdayCountdown() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    setDaysLeft(calculateDaysUntilBirthday());
  }, []);

  return (
    <div className="flex flex-col items-center p-8 glass-effect rounded-3xl">
      <div className="text-6xl mb-4">🎂</div>
      <h3 className="text-lg md:text-xl font-display text-white/80 mb-2">
        Ulang Tahun Lili
      </h3>
      <motion.div
        key={daysLeft}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="text-6xl md:text-8xl font-display font-bold text-primary-pink"
      >
        {daysLeft}
      </motion.div>
      <p className="text-white/50 mt-2">hari lagi</p>
      <p className="text-white/30 text-sm mt-1">21 Juni 2026</p>
    </div>
  );
}