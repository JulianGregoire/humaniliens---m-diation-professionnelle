import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants.ts';

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl text-blue-700 mb-4">
                        <HelpCircle size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Questions Fréquentes</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Retrouvez les réponses aux questions les plus courantes sur la médiation professionnelle et mon accompagnement.
                    </p>
                </div>

                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200 hover:border-blue-200 shadow-sm"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center gap-4 focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-slate-800">{item.question}</span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-slate-400 flex-shrink-0"
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 bg-blue-800 rounded-3xl text-center text-white shadow-xl shadow-blue-800/20">
                    <h3 className="text-xl font-bold mb-2">Vous avez d'autres questions ?</h3>
                    <p className="text-blue-100 mb-6">Je suis à votre disposition pour échanger sur votre situation spécifique.</p>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-8 py-3 bg-white text-blue-800 font-bold rounded-full hover:bg-blue-50 transition-colors"
                    >
                        Me contacter directement
                    </a>
                </div>
            </div>
        </section>
    );
};
