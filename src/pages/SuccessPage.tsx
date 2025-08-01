import React, { useEffect } from 'react';
import { CheckCircle, Download } from 'lucide-react';

const SuccessPage: React.FC = () => {
  useEffect(() => {
    // Simuler le téléchargement automatique du PDF
    const timer = setTimeout(() => {
      // Créer un lien de téléchargement fictif
      const link = document.createElement('a');
      link.href = '/guide-ventre-plat-naturel.pdf'; // Remplacez par votre vrai lien PDF
      link.download = 'Guide-Ventre-Plat-Naturel.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Félicitations ! 🎉
          </h1>
          
          <h2 className="text-xl md:text-2xl text-green-600 font-semibold mb-6">
            Votre commande a été validée avec succès
          </h2>

          {/* Download Info */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Download className="w-6 h-6 text-blue-600" />
              <span className="text-lg font-semibold text-blue-900">
                Téléchargement en cours...
              </span>
            </div>
            <p className="text-blue-700">
              Votre guide "Ventre Plat Naturel" va se télécharger automatiquement dans quelques secondes.
            </p>
          </div>

          {/* What's Next */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">
              Que faire maintenant ?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600">📖</span>
                  <span className="font-medium text-gray-900">Étape 1</span>
                </div>
                <p className="text-sm text-gray-600">
                  Lisez attentivement le guide complet (11 pages)
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-600">🍎</span>
                  <span className="font-medium text-gray-900">Étape 2</span>
                </div>
                <p className="text-sm text-gray-600">
                  Commencez dès aujourd'hui avec le plan alimentaire
                </p>
              </div>
            </div>
          </div>

          {/* Email Confirmation */}
          <div className="bg-green-50 rounded-lg p-4 mb-8">
            <p className="text-green-700 text-sm">
              📧 Vous recevrez également un email de confirmation avec le lien de téléchargement 
              au cas où le téléchargement automatique ne fonctionnerait pas.
            </p>
          </div>

          {/* Manual Download Button */}
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/guide-ventre-plat-naturel.pdf';
              link.download = 'Guide-Ventre-Plat-Naturel.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto mb-6"
          >
            <Download className="w-5 h-5" />
            <span>Télécharger maintenant</span>
          </button>

          {/* Support */}
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Un problème avec le téléchargement ?
              <br />
              <a href="mailto:contact@ventreplatnaturel.com" className="text-blue-600 hover:underline font-medium">
                Contactez-nous
              </a> - Nous vous répondons sous 24h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;