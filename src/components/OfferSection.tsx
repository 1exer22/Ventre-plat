import React, { useState } from 'react';
import { ArrowRight, Shield, Download, Clock, Gift } from 'lucide-react';

const OfferSection: React.FC = () => {
  const handlePayment = () => {
    window.open('https://buy.stripe.com/bJe00j2i4clw338gBRfrW05', '_blank');
  };

  return (
    <section id="offer-section" className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Urgency Bar */}
        <div className="bg-red-500 rounded-lg p-4 mb-12 text-center">
          <p className="font-semibold">
            ⏰ OFFRE LIMITÉE : Plus que 48h au prix promotionnel !
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Retrouvez un ventre plat en 14 jours
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Tout ce dont vous avez besoin pour dire adieu aux ballonnements définitivement
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Offer Details */}
          <div className="space-y-8">
            {/* Price */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                <span className="text-2xl text-red-300 line-through">29,99€</span>
                <span className="text-5xl font-bold">15,99€</span>
              </div>
              <p className="text-blue-200">
                Prix de lancement - Économisez 14€ aujourd'hui
              </p>
            </div>

            {/* What's Included */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">📦 Ce que vous recevez :</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Guide "Ventre Plat Naturel" (PDF 11 pages)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Plan alimentaire détaillé</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Techniques digestives illustrées</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>BONUS : Checklist aliments (PDF)</span>
                </li>
              </ul>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-green-400" />
                <span className="text-sm">Accès immédiat</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-sm">24h/24 7j/7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">Paiement sécurisé</span>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="bg-white rounded-2xl p-8 text-gray-900">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                Commandez maintenant
              </h3>
              <p className="text-gray-600">
                Et recevez votre guide dans 2 minutes
              </p>
            </div>

            <button 
              onClick={handlePayment}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group mb-6"
            >
              <span>COMMANDER MAINTENANT - 15,99€</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Paiement sécurisé par :</p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded">💳 Carte</span>
                <span className="bg-gray-100 px-3 py-1 rounded">🏦 PayPal</span>
                <span className="bg-gray-100 px-3 py-1 rounded">🍎 Apple Pay</span>
              </div>
            </div>

            {/* Bonus Highlight */}
            <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <Gift className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">BONUS GRATUIT</span>
              </div>
              <p className="text-sm text-green-700">
                Checklist "Aliments Anti-Ballonnements" à imprimer (valeur 9€)
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OfferSection;