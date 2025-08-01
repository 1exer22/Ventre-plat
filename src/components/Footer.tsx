import React from 'react';
import { Mail, Shield, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">VP</span>
              </div>
              <span className="font-bold text-xl">Ventre Plat Naturel</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La méthode naturelle et efficace pour retrouver un ventre plat en 14 jours, testée par plus de 2000 personnes.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact & Support</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:contact@ventreplatnaturel.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@ventreplatnaturel.com
                </a>
              </div>
              <p className="text-gray-400">
                Support client disponible 7j/7
                <br />Réponse sous 24h maximum
              </p>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Informations légales</h3>
            <div className="space-y-2 text-sm">
              <a href="/mentions-legales" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
                <span>Mentions légales</span>
              </a>
              <a href="/politique-confidentialite" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <Shield className="w-4 h-4" />
                <span>Politique de confidentialité</span>
              </a>
              <a href="/cgv" className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <FileText className="w-4 h-4" />
                <span>Conditions générales de vente</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Ventre Plat Naturel. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-400" />
                <span>Paiement sécurisé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            Les résultats peuvent varier d'une personne à l'autre. Les témoignages présentés ne garantissent pas que vous obtiendrez les mêmes résultats. 
            Ce produit n'est pas destiné à diagnostiquer, traiter, guérir ou prévenir une maladie. 
            Consultez votre médecin avant de commencer tout programme nutritionnel si vous avez des problèmes de santé.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;