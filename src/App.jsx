import React from 'react';
import { Reveal } from './components/Reveal';
import { TechMarquee } from './components/TechMarquee';
import { Magnetic } from './components/Magnetic';
import { config } from './data';
import { ArrowUpRight } from 'lucide-react';

function App() {
    return (
        <div className="bg-black min-h-screen text-gray-100 selection:bg-white/20 selection:text-white pb-20 font-sans relative">

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
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.95]">
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
                                <Magnetic>
                                    <a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors"
                                    >
                                        View Resume
                                    </a>
                                </Magnetic>
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
                                    <h3 className="text-3xl md:text-4xl font-semibold text-gray-200 group-hover:text-white transition-colors">
                                        {project.title}
                                    </h3>
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
                        <div className="flex flex-col gap-2">
                            <p>{config.footer}</p>
                            <a
                                href="mailto:satyamswarnakar@example.com"
                                className="text-gray-300 hover:text-white transition-colors font-medium"
                            >
                                satyamswarnakar@example.com
                            </a>
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
