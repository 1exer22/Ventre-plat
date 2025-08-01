import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const handlePayment = () => {
    window.open('https://buy.stripe.com/bJe00j2i4clw338gBRfrW05', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Urgency */}
        <div className="bg-red-500 rounded-lg p-3 mb-8 inline-block">
          <div className="flex items-center space-x-2">
            <Clock className="w-5 h-5" />
            <span className="font-semibold">DERNIÈRES HEURES au prix promotionnel !</span>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ne laissez plus les ballonnements 
          <br />gâcher votre vie
        </h2>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
          Dans 14 jours, vous pourrez enfin porter vos vêtements préférés avec confiance et profiter de vos repas sans stress digestif
        </p>

        <div className="bg-white/10 rounded-xl p-6 mb-8 backdrop-blur-sm max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">🎯 Imaginez-vous dans 2 semaines :</h3>
          <div className="grid md:grid-cols-2 gap-4 text-left">
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Ventre plat et ferme</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Digestion parfaite</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Plus de ballonnements</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Confiance retrouvée</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Vêtements qui vous vont</span>
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-400">✓</span>
                <span>Bien-être au quotidien</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="text-2xl text-red-300 line-through">29,99€</span>
            <span className="text-4xl font-bold">15,99€</span>
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              -47%
            </span>
          </div>
          <p className="text-blue-200">
            Offre limitée - Le prix remonte à 29,99€ dans 48h
          </p>
        </div>

        <button 
          onClick={handlePayment}
          className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group mx-auto mb-8"
        >
          <span>COMMANDER MAINTENANT - 15,99€</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="text-center space-y-2 text-blue-200">
          <p>🔒 Paiement 100% sécurisé</p>
          <p>📱 Téléchargement immédiat après paiement</p>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-lg font-medium">
            Plus de <span className="text-yellow-400">2000 femmes</span> ont déjà retrouvé un ventre plat grâce à cette méthode
          </p>
          <p className="text-blue-200 mt-2">
            À votre tour de dire adieu aux ballonnements !
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;