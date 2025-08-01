import React from 'react';
import { CheckCircle, Gift } from 'lucide-react';

const ContentPreview: React.FC = () => {
  const chapters = [
    "🎯 Introduction : Pourquoi votre ventre gonfle (et comment l'arrêter)",
    "🔬 Chapitre 1 : Les vraies causes des ballonnements (ce que personne ne vous dit)",
    "🌿 Chapitre 2 : La détox digestive en 3 jours (protocole complet)",
    "🍎 Chapitre 3 : Les 50 aliments anti-ballonnements à privilégier",
    "❌ Chapitre 4 : Les 20 aliments à éviter absolument",
    "📋 Chapitre 5 : Votre plan alimentaire 3 mois (semaine par semaine)",
    "🏃‍♀️ Chapitre 6 : Les 7 exercices digestifs (5 min/jour)",
    "⚡ Chapitre 7 : SOS Ballonnements - Solutions d'urgence",
    "📊 Chapitre 8 : Suivi et maintien des résultats"
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que vous allez découvrir dans ce guide de 
            <span className="text-blue-600"> 11 pages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un contenu dense et actionnable pour des résultats rapides et durables
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Content List */}
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{chapter}</span>
              </div>
            ))}
          </div>

          {/* Highlight Box */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">🎯 Focus Spécial</h3>
              <h4 className="text-xl font-semibold mb-4">Plan Alimentaire 3 Mois</h4>
              <p className="mb-6 leading-relaxed">
                Le coeur du guide ! Un plan détaillé semaine par semaine avec :
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>✓ Menus types pour chaque semaine</li>
                <li>✓ Liste de courses complète</li>
                <li>✓ Recettes anti-ballonnements</li>
                <li>✓ Alternatives pour tous les goûts</li>
                <li>✓ Conseils pour les sorties restaurant</li>
              </ul>
            </div>

            {/* Bonus */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <Gift className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold text-gray-900">BONUS INCLUS</h3>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                📋 Checklist "Aliments Anti-Ballonnements"
              </h4>
              <p className="text-gray-600 text-sm">
                Un PDF bonus à imprimer et garder dans votre cuisine avec tous les aliments à privilégier et à éviter en un coup d'oeil.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">11</div>
                <div className="text-gray-600 text-sm">Pages denses</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-2">14</div>
                <div className="text-gray-600 text-sm">Jours pour des résultats</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPreview;