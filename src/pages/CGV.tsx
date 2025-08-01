import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CGV: React.FC = () => {
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

          <h1 className="text-3xl font-bold text-gray-900 mb-8">Conditions Générales de Vente</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 1 - Objet</h2>
              <p>
                Les présentes conditions générales de vente régissent les relations contractuelles entre 
                Ventre Plat Naturel et ses clients dans le cadre de la vente en ligne de produits numériques.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 2 - Produits</h2>
              <p>
                Nous vendons des guides numériques au format PDF téléchargeables immédiatement après paiement. 
                Les produits sont décrits avec la plus grande précision possible sur notre site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 3 - Prix</h2>
              <p>
                Les prix sont indiqués en euros TTC. Nous nous réservons le droit de modifier nos prix à tout moment, 
                mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 4 - Commande</h2>
              <p>
                La commande est validée après paiement intégral. Vous recevrez un email de confirmation 
                avec le lien de téléchargement de votre produit dans les minutes suivant votre achat.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 5 - Paiement</h2>
              <p>
                Le paiement s'effectue en ligne par carte bancaire via notre prestataire sécurisé Stripe. 
                Aucune donnée bancaire n'est stockée sur nos serveurs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 6 - Livraison</h2>
              <p>
                Les produits numériques sont livrés par email immédiatement après validation du paiement. 
                En cas de problème, contactez-nous à contact@ventreplatnaturel.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 7 - Droit de rétractation</h2>
              <p>
                Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé 
                pour les contenus numériques non fournis sur un support matériel dont l'exécution a commencé après accord préalable 
                exprès du consommateur et renoncement exprès à son droit de rétractation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 8 - Garantie</h2>
              <p>
                Nous offrons une garantie satisfait ou remboursé de 30 jours. Si vous n'êtes pas satisfait de votre achat, 
                contactez-nous pour obtenir un remboursement intégral.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 9 - Propriété intellectuelle</h2>
              <p>
                Tous les contenus vendus sont protégés par le droit d'auteur. L'achat vous donne un droit d'usage personnel 
                et non commercial. Toute reproduction, distribution ou revente est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Article 10 - Litiges</h2>
              <p>
                En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. 
                À défaut, les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGV;