import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "React", "Python", "Solidity", "Docker",
    "System Design", "Next.js", "Tailwind"
];

export const TechMarquee = () => {
    return (
        <div className="relative w-full py-20 overflow-hidden mb-32 border-y border-white/5">
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
                        duration: 40
                    }}
                >
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-[6rem] md:text-[8rem] font-bold text-transparent px-12 md:px-16 uppercase tracking-tighter"
                            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}
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
                        duration: 40
                    }}
                >
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="text-[6rem] md:text-[8rem] font-bold text-transparent px-12 md:px-16 uppercase tracking-tighter"
                            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)" }}
                        >
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
