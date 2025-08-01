import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marie L.",
      age: "34 ans, Marseille",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      rating: 5,
      result: "-8cm de tour de taille en 3 semaines",
      text: "Je souffrais de ballonnements depuis des années. Grâce à ce guide, j'ai enfin compris pourquoi et surtout comment les éviter. Les résultats ont été visibles dès la première semaine ! Je me sens tellement mieux dans ma peau.",
      beforeAfter: "Avant : ballonnée après chaque repas → Après : digestion parfaite"
    },
    {
      name: "Sophie M.", 
      age: "28 ans, Lyon",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      rating: 5,
      result: "Ventre plat retrouvé en 2 semaines",
      text: "Incroyable ! J'avais tout essayé : régimes, sport intensif, compléments... Rien ne marchait. Cette méthode naturelle a été un game-changer total. Je recommande à 100% !",
      beforeAfter: "Avant : complexée par mon ventre → Après : confiante en maillot"
    },
    {
      name: "Isabelle R.",
      age: "45 ans, Paris", 
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
      rating: 5,
      result: "Plus de ballonnements depuis 1 mois",
      text: "À mon âge, je pensais que c'était normal d'avoir ces problèmes digestifs. Ce guide m'a prouvé le contraire ! Les conseils sont simples à appliquer et les résultats sont là. Merci !",
      beforeAfter: "Avant : inconfort permanent → Après : légèreté retrouvée"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Elles ont retrouvé un ventre plat
            <span className="text-green-600"> grâce à cette méthode</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plus de 2000 femmes ont déjà transformé leur digestion et retrouvé confiance en elles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.age}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="bg-green-100 rounded-lg p-3 mb-4">
                <p className="text-green-700 font-semibold text-center text-sm">
                  🎯 {testimonial.result}
                </p>
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Before/After */}
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-600">
                  <span className="font-medium">Transformation :</span><br />
                  {testimonial.beforeAfter}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl font-bold text-blue-600">2000+</div>
                <div className="text-sm text-gray-600">Femmes aidées</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600">Taux de réussite</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">14</div>
                <div className="text-sm text-gray-600">Jours moyens</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">4.9/5</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;