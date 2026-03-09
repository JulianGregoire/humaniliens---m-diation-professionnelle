import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants.ts';

const ReactLogo = () => (
    <img src="/logo.svg" alt="HumaniLiens" className="h-16 md:h-24 w-auto object-contain" />
);

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = NAV_LINKS || [];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <a
                        href="/"
                        className="flex-shrink-0"
                    >
                        <ReactLogo />
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link: any) => (
                            <a
                                key={link.label}
                                href={link.href === '#blog' ? '/blog' : `/${link.href}`}
                                className="text-slate-600 hover:text-blue-700 font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="/#contact"
                            className="px-5 py-2.5 bg-blue-800 text-white font-medium rounded-full hover:bg-blue-900 transition-colors shadow-lg shadow-blue-800/20"
                        >
                            Prendre RDV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-blue-800 p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {links.map((link: any) => (
                                <a
                                    key={link.label}
                                    href={link.href === '#blog' ? '/blog' : `/${link.href}`}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 text-base font-medium text-slate-600 hover:text-blue-800 hover:bg-slate-50 rounded-md"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="pt-4">
                                <a
                                    href="/#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center px-5 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900"
                                >
                                    Prendre RDV
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
