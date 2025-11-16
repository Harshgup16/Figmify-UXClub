"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ScrollDown = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop"
        }}
        className="cursor-pointer"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-blue-500 text-sm mt-2 font-medium"
      >
        Scroll down
      </motion.p>
    </div>
  );
};

export default ScrollDown;