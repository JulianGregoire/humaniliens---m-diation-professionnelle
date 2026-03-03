import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate form submission
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-blue-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Parlons de votre situation</h2>
                        <p className="text-blue-200 text-lg mb-8">
                            Le premier échange est sans engagement. Il nous permet de vérifier si la médiation est la solution adaptée à votre problématique.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-800/50 rounded-lg">
                                    <Mail className="text-sky-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <p className="text-blue-200">contact@humaniliens.fr</p>
                                    <p className="text-xs text-blue-400 mt-1">Réponse sous 24h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-800/50 rounded-lg">
                                    <Phone className="text-sky-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Téléphone</h3>
                                    <p className="text-blue-200">06 00 00 00 00</p>
                                    <p className="text-xs text-blue-400 mt-1">Du Lundi au Vendredi, 9h-18h</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-blue-800/50 rounded-lg">
                                    <MapPin className="text-sky-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Localisation</h3>
                                    <p className="text-blue-200">Siège : Paris, France</p>
                                    <p className="text-xs text-blue-400 mt-1">Intervention : France entière & DOM/TOM (Visioconférence)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white text-slate-900 rounded-3xl p-8 lg:p-10 shadow-2xl">
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                                    <Send size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message envoyé !</h3>
                                <p className="text-slate-600">Merci de votre confiance. Marie-Andrée reviendra vers vous très prochainement.</p>
                                <button onClick={() => setStatus('idle')} className="mt-6 text-blue-600 font-medium hover:underline">Envoyer un autre message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <h3 className="text-xl font-bold mb-4">Formulaire de contact</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                                        <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Votre nom" />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Entreprise</label>
                                        <input type="text" id="company" name="company" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Nom de l'entreprise" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email professionnel</label>
                                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="vous@entreprise.com" />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                    <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Décrivez brièvement votre besoin..."></textarea>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input type="checkbox" id="consent" name="consent" required className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                    <label htmlFor="consent" className="text-xs text-slate-500">J'accepte que mes données soient traitées pour répondre à ma demande.</label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                >
                                    {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
                                    {status === 'idle' && <Send size={18} />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
