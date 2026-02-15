import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../data';

export const TechMarquee = () => {
    return (
        <div className="relative w-full py-16 overflow-hidden mb-24 border-y border-white/5 bg-black/50 backdrop-blur-sm">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    className="flex whitespace-nowrap flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50
                    }}
                >
                    {config.marquee.map((skill, index) => (
                        <span
                            key={index}
                            className="text-[5rem] md:text-[7rem] font-bold text-slate-800 hover:text-white transition-colors duration-500 px-12 md:px-16 uppercase tracking-tighter cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex whitespace-nowrap flex-shrink-0"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 50
                    }}
                >
                    {config.marquee.map((skill, index) => (
                        <span
                            key={index}
                            className="text-[5rem] md:text-[7rem] font-bold text-slate-800 hover:text-white transition-colors duration-500 px-12 md:px-16 uppercase tracking-tighter cursor-default"
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
