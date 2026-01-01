import React from 'react';
import { Reveal } from './components/Reveal';
import { Magnetic } from './components/Magnetic';
import { config } from './data';
import { ArrowUpRight } from 'lucide-react';

function App() {
    return (
        <div className="bg-black min-h-screen text-gray-100 selection:bg-white/20 selection:text-white pb-20 font-sans">
            <div className="max-w-screen-xl mx-auto px-6 md:px-12 pt-24 md:pt-40">

                {/* Hero Section */}
                <header className="mb-32">
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
                                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
                                    {config.hero.subtext}
                                </p>
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

                {/* Footer */}
                <footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <Reveal delay={0.5}>
                        <p>{config.footer}</p>
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
