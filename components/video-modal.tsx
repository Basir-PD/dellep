"use client";

import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

export function VideoModal() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowControls(false);
  };

  return (
    <div
      className="absolute inset-0 z-20 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onClick={handleToggle}
    >
      {/* Video element — hidden until playing */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
        onEnded={handleVideoEnd}
        playsInline
        preload="metadata"
      >
        {/* Replace with your actual video */}
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Play button — shown when not playing */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="md:h-20 md:w-20 h-14 w-14 bg-black/60 hover:bg-black/80 rounded-full backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors duration-200 relative z-30"
          >
            <FaPlay className="md:h-7 md:w-7 h-5 w-5 text-white ml-1" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pause button — shown on hover while playing */}
      <AnimatePresence>
        {isPlaying && showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:h-16 md:w-16 h-12 w-12 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors duration-200 relative z-30"
          >
            <FaPause className="md:h-5 md:w-5 h-4 w-4 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
