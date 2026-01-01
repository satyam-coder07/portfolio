import React from 'react';
import { IDENTITY } from '../constants';
import { Github, Linkedin, Code } from 'lucide-react'; // Using Code icon as placeholder for HackerRank/generic

const Contact = () => {
    return (
        <section className="py-24" id="contact">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">COMMS_CHANNELS</h2>
                <div className="h-px flex-1 bg-white/10"></div>
                <span className="font-mono text-accent-blue text-sm">SIGNAL_STRENGTH::MAX</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                <div className="bg-background p-12 flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Transmit Message</h3>
                        <p className="text-gray-400 mb-8">
                            Open for collaboration on AI Research, Decentralized Systems, and full-stack platforms.
                            <br />
                            {IDENTITY.availability}
                        </p>
                    </div>

                    <a
                        href={`mailto:${IDENTITY.email}`}
                        className="inline-flex items-center justify-center py-4 px-8 bg-accent-blue text-black font-bold hover:bg-white transition-colors tracking-wide"
                    >
                        INITIATE_CONTACT()
                    </a>
                </div>

                <div className="bg-background p-12 flex flex-col justify-center space-y-4">
                    {IDENTITY.socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 border border-white/10 hover:border-accent-blue/50 hover:bg-white/5 transition-all group"
                        >
                            <span className="font-mono text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                            <div className="w-2 h-2 bg-white/20 group-hover:bg-accent-blue transition-colors rounded-full"></div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 gap-4">
                <p>SATYAM_SWARNAKAR // SYS.VER.2026</p>
                <p>DESIGNED_FOR_PERFORMANCE</p>
                <p>ALL_SYSTEMS_OPERATIONAL</p>
            </div>
        </section>
    );
};

export default Contact;
