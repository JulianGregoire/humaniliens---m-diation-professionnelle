import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Review } from '/src/types.ts';

const REVIEWS: Review[] = [
    {
        id: '1',
        author: 'Jean-Pierre Durand',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop',
        rating: 5,
        date: 'Il y a 2 semaines',
        text: "Marie-Andrée a su dénouer une situation de conflit qui durait depuis des mois dans notre service. Son approche est à la fois ferme et très humaine. Je recommande vivement ses services de médiation.",
        isGoogleReview: true,
    },
    {
        id: '2',
        author: 'Sophie Martin',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop',
        rating: 5,
        date: 'Il y a 1 mois',
        text: "Une intervention d'une grande qualité. Nous avons pu retrouver un dialogue constructif au sein de la direction. Un grand merci pour votre professionnalisme et votre neutralité.",
        isGoogleReview: true,
    },
    {
        id: '3',
        author: 'Cabinet L. & Associés',
        rating: 5,
        date: 'Il y a 3 mois',
        text: "Médiatrice très compétente, capable de gérer des tensions fortes. Le processus a été clair et efficace. Les résultats sont là : l'équipe travaille à nouveau sereinement.",
        isGoogleReview: true,
    },
    {
        id: '4',
        author: 'Marc Lefebvre',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop',
        rating: 5,
        date: 'Il y a 4 mois',
        text: "Excellent accompagnement pour une médiation inter-entreprises. Marie-Andrée a une capacité d'écoute exceptionnelle qui permet de sortir des impasses juridiques par le haut.",
        isGoogleReview: true,
    },
    {
        id: '5',
        author: 'Lucie Bernard',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop',
        rating: 5,
        date: 'Il y a 5 mois',
        text: "Une aide précieuse pour notre association. Le climat social s'est nettement amélioré après son passage. Très professionnelle et impartiale.",
        isGoogleReview: true,
    },
    {
        id: '6',
        author: 'Thomas Giraud',
        rating: 5,
        date: 'Il y a 6 mois',
        text: "Je recommande sans hésiter. La médiation à distance s'est déroulée de manière très fluide malgré les fuseaux horaires différents. Un gain de temps et d'énergie précieux.",
        isGoogleReview: true,
    }
];

export const GoogleReviews = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(REVIEWS.length / itemsPerPage);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const getVisibleReviews = () => {
        const start = currentIndex * itemsPerPage;
        return REVIEWS.slice(start, start + itemsPerPage);
    };

    return (
        <section id="avis" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                        Avis de nos clients
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-xl font-bold text-slate-900">5.0</span>
                    </div>
                    <p className="text-slate-600">
                        Basé sur 15 avis Google
                    </p>
                </div>

                <div className="relative px-12">
                    <div className="overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {getVisibleReviews().map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative h-full flex flex-col"
                                    >
                                        <div className="absolute top-6 right-6">
                                            <svg viewBox="0 0 24 24" className="w-5 h-5">
                                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                        </div>

                                        <div className="flex items-center gap-4 mb-4">
                                            {review.avatar ? (
                                                <img
                                                    src={review.avatar}
                                                    alt={review.author}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                    referrerPolicy="no-referrer"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                                                    {review.author.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <h3 className="font-bold text-slate-900 leading-tight">{review.author}</h3>
                                                <p className="text-xs text-slate-500">{review.date}</p>
                                            </div>
                                        </div>

                                        <div className="flex mb-3">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                            ))}
                                        </div>

                                        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                                            {review.text}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-slate-200 p-2 rounded-full shadow-lg text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all z-10"
                        aria-label="Précédent"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-slate-200 p-2 rounded-full shadow-lg text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all z-10"
                        aria-label="Suivant"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-blue-600 w-6' : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                            aria-label={`Aller à la page ${i + 1}`}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://www.google.com/search?q=Marie-Andrée+Fontaine+Médiation"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                    >
                        Voir tous les avis sur Google
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};
