import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PolitiqueConfidentialite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-8">
            <a href="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour à l'accueil</span>
            </a>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Collecte des données</h2>
              <p className="mb-4">
                Nous collectons les données personnelles suivantes :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Données de navigation (cookies, adresse IP)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Utilisation des données</h2>
              <p className="mb-4">
                Vos données personnelles sont utilisées pour :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Traiter votre commande et vous envoyer le produit acheté</li>
                <li>Vous contacter en cas de problème avec votre commande</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Vous envoyer des informations sur nos nouveaux produits (avec votre consentement)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pendant une durée de 3 ans à compter de votre dernière interaction avec nos services, 
                sauf obligation légale de conservation plus longue.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Vos droits</h2>
              <p className="mb-4">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : contact@ventreplatnaturel.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Sécurité</h2>
              <p>
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre la destruction, la perte, l'altération, 
                la divulgation ou l'accès non autorisés.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité, 
                vous pouvez nous contacter à : contact@ventreplatnaturel.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;