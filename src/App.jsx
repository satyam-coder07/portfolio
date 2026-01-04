import { Reveal } from './components/Reveal';
import { TechMarquee } from './components/TechMarquee';
import { Magnetic } from './components/Magnetic';
import { ScrollProgress } from './components/ScrollProgress';
import { config } from './data';
import { ArrowUpRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Main Application Component
 * 
 * Uses Framer Motion for scroll-based animations (Reveal component) and 
 * custom Magnetic buttons for cursor interaction.
 * 
 * @returns {JSX.Element} The full single-page portfolio
 */
function App() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("work.satyam123@gmail.com");
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
    };

    return (
        <div className="bg-black min-h-screen text-gray-100 selection:bg-white/20 selection:text-white pb-20 font-sans relative">
            <ScrollProgress />

            {/* Email Toast */}
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 ${emailCopied ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                <Check className="w-4 h-4 text-green-400" />
                <span>Email Copied to Clipboard</span>
            </div>

            {/* Availability Badge */}
            <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20">
                <Reveal delay={1.2}>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-400 tracking-wide uppercase">Available: June - Dec 2026</span>
                    </div>
                </Reveal>
            </div>

            <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-24 md:pt-40">

                {/* Hero Section */}
                <header className="mb-20">
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95] break-words">
                        <Reveal delay={0.1}>
                            <span className="block text-gray-100">{config.hero.line1}</span>
                        </Reveal>
                        <Reveal delay={0.25}>
                            <span className="block text-gray-400">{config.hero.line2}</span>
                        </Reveal>
                    </h1>

                    <div className="md:flex md:justify-between md:items-end w-full">
                        <div className="max-w-xl mb-8 md:mb-0">
                            <Reveal delay={0.4}>
                                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8">
                                    {config.hero.subtext}
                                </p>
                                <div className="mt-8">
                                    <Magnetic>
                                        <motion.a
                                            href="/resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-colors duration-300 group"
                                        >
                                            <span className="text-xs font-medium uppercase tracking-widest text-white group-hover:text-black transition-colors">
                                                View Resume
                                            </span>
                                            <ArrowUpRight className="w-3 h-3 text-white group-hover:text-black transition-colors" />
                                        </motion.a>
                                    </Magnetic>
                                </div>
                            </Reveal>
                        </div>

                        {/* Socials */}
                        <div className="flex gap-8">
                            {config.socials.map((social, index) => (
                                <Reveal key={social.name} delay={0.5 + (index * 0.1)}>
                                    <Magnetic>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm uppercase tracking-widest text-gray-500 hover:text-white transition-colors duration-300"
                                        >
                                            {social.name}
                                        </a>
                                    </Magnetic>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </header>
            </div>

            <TechMarquee />

            <div className="max-w-screen-xl mx-auto px-6 md:px-12">

                {/* Work Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-32">
                    {config.projects.map((project, index) => (
                        <Reveal key={index} delay={0.2 + (index * 0.1)} width="100%">
                            <Magnetic className="h-full">
                                <a href={project.link} className="block h-full group p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-12 md:mb-24">
                                        <span className="text-gray-500 text-sm tracking-widest uppercase font-medium">{project.category}</span>
                                        <ArrowUpRight strokeWidth={1} className="w-6 h-6 text-gray-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-semibold text-gray-200 group-hover:text-white transition-colors mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            </Magnetic>
                        </Reveal>
                    ))}
                </section>

                {/* Deep Dives Section */}
                <section className="mb-32">
                    <Reveal>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-white/20"></span>
                            Research & Engineering
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {config.deepDives.map((item, index) => (
                            <Reveal key={index} delay={0.2 + (index * 0.1)}>
                                <div className="h-full p-6 md:p-8 border border-white/10 bg-white/5 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] transition-all duration-500 group cursor-default">
                                    <div className="flex flex-col h-full justify-between gap-6">
                                        <div>
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="text-xs font-medium tracking-widest uppercase text-yellow-500/80">{item.tag}</span>
                                                <span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded uppercase tracking-wider text-gray-400">{item.type}</span>
                                            </div>
                                            <h3 className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="pt-6 border-t border-white/5">
                                            <span className="text-sm text-gray-500 flex items-center gap-2">
                                                <span className="w-1 h-1 rounded-full bg-yellow-500"></span>
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center text-gray-500 text-sm gap-8">
                    <Reveal delay={0.5}>
                        <div className="flex flex-col gap-4">
                            {/* Terminal Widget */}
                            {/* Execution Monitor */}
                            <div className="w-full max-w-md mb-4 bg-black border border-white/10 rounded-lg overflow-hidden">
                                <div className="px-4 py-2 border-b border-white/10 bg-white/5 flex items-center justify-between">
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">System Diagnostics</span>
                                    <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-wider animate-pulse">Mission Status: 2026</span>
                                </div>
                                <div className="p-4 flex flex-col gap-4">
                                    {config.executionMonitor.map((item, index) => (
                                        <div key={index} className="flex flex-col gap-1">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1.5 h-1.5 rounded-full ${item.color} animate-pulse shadow-[0_0_8px_currentColor]`} />
                                                <span className="text-xs font-semibold text-gray-200 tracking-wide">{item.title}</span>
                                            </div>
                                            <div className="pl-3.5 border-l border-white/10 ml-[3px]">
                                                <p className="text-[10px] text-gray-400 font-mono mb-0.5">TARGET: <span className="text-gray-300">{item.target}</span></p>
                                                <p className="text-[10px] text-gray-500 font-mono">STATUS: <span className={item.color.replace('bg-', 'text-')}>{item.status}</span></p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p>{config.footer}</p>
                            <button
                                onClick={handleCopyEmail}
                                className="text-gray-300 hover:text-white transition-colors font-medium flex items-center gap-2 group text-left"
                            >
                                <span className="group-hover:underline decoration-white/30 underline-offset-4">work.satyam123@gmail.com</span>
                                <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </Reveal>
                    <Reveal delay={0.6}>
                        <p className="mt-2 md:mt-0">© {new Date().getFullYear()} Satyam Swarnakar.</p>
                    </Reveal>
                </footer>

            </div>
        </div>
    )
}

export default App
