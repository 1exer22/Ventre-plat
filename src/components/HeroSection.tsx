import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const handlePayment = () => {
    window.open('https://buy.stripe.com/bJe00j2i4clw338gBRfrW05', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Enfin Débarrassé(e) de Votre 
                <span className="text-blue-600"> Ventre Gonflé</span> 
                <br />en <span className="text-green-600">14 Jours !</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Le guide complet pour retrouver un ventre plat sans sport intensif ni régime draconien
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Méthode 100% naturelle</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Résultats en 14 jours</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Sans sport intensif</span>
              </div>
            </div>

            <button 
              onClick={handlePayment}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>JE VEUX MON GUIDE À 15,99€</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-sm text-gray-500">
              🔒 Paiement sécurisé • 📱 Téléchargement immédiat
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Ebook Cover */}
              <div className="bg-white rounded-xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/couverture.png" 
                  alt="Couverture Ebook Ventre Plat Naturel"
                  className="w-full h-80 md:h-96 object-contain rounded-lg"
                />
              </div>
              
              {/* Before/After Visual */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border-2 border-green-200">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-red-600 text-xl">😣</span>
                    </div>
                    <p className="text-xs text-gray-600">Avant</p>
                  </div>
                  <div className="text-2xl text-green-500">→</div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-green-600 text-xl">😊</span>
                    </div>
                    <p className="text-xs text-gray-600">Après</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-4 left-4 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-8 left-8 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;