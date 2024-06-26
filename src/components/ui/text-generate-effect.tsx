"use client";
import { useEffect } from "react";
import React from 'react';
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn.ts";

export const TextGenerateEffect = ({
    words,
    className,
  }: {
    words: string;
    className?: string;
  }) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");
    useEffect(() => {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 2,
          delay: stagger(0.3),
        }
      );
    }, [scope.current]);
   
    const renderWords = () => {
      return (
        <motion.div ref={scope}>
          {wordsArray.map((word, idx) => {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-black text-white opacity-0"
              >
                {word}{" "}
              </motion.span>
            );
          })}
        </motion.div>
      );
    };
   
    return (
      <div className={className}>
        <div className="mt-4">
          <div className=" dark:text-white text-black leading-snug tracking-wide">
            {renderWords()}
          </div>
        </div>
      </div>
    );
  };