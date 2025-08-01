import React from 'react';
import { ArrowLeft } from 'lucide-react';

const MentionsLegales: React.FC = () => {
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

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Mentions Légales</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Éditeur du site</h2>
              <p>
                <strong>Raison sociale :</strong> Ventre Plat Naturel<br />
                <strong>Forme juridique :</strong> Micro-entreprise<br />
                <strong>Adresse :</strong> 123 Rue de la Santé, 75001 Paris, France<br />
                <strong>Email :</strong> contact@ventreplatnaturel.com<br />
                <strong>Numéro SIRET :</strong> 12345678901234
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Hébergement</h2>
              <p>
                Ce site est hébergé par Netlify, Inc.<br />
                2325 3rd Street, Suite 296, San Francisco, CA 94107, USA
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
                Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsabilité</h2>
              <p>
                Les informations contenues sur ce site le sont à titre purement informatif et ne peuvent en aucun cas remplacer une consultation médicale. 
                Nous déclinons toute responsabilité quant à l'utilisation qui pourrait être faite de ces informations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Données personnelles</h2>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au RGPD, 
                vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant. 
                Pour exercer ce droit, contactez-nous à : contact@ventreplatnaturel.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
                En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;