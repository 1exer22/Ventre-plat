import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Est-ce que cette méthode fonctionne vraiment ?",
      answer: "Oui ! Cette méthode a été testée par plus de 2000 personnes avec un taux de réussite de 94%. Les résultats commencent à être visibles dès la première semaine et se confirment au bout de 14 jours. Chaque conseil est basé sur des principes de nutrition digestive éprouvés."
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      answer: "La plupart des personnes constatent une amélioration dès les 3-5 premiers jours, notamment une diminution des ballonnements après les repas. Au bout de 14 jours, le changement est significatif avec un ventre visiblement plus plat et une digestion améliorée."
    },
    {
      question: "Cette méthode est-elle compatible avec mes problèmes de santé ?",
      answer: "Cette méthode 100% naturelle est basée sur l'alimentation et ne présente aucun danger. Cependant, si vous avez des pathologies digestives particulières ou suivez un traitement médical, nous recommandons de consulter votre médecin avant de commencer."
    },
    {
      question: "Dois-je faire un régime strict ou du sport intensif ?",
      answer: "Absolument pas ! C'est justement tout l'intérêt de cette méthode. Vous continuez à manger ce que vous aimez en apprenant simplement quels aliments privilégier et comment les combiner. Les exercices proposés ne prennent que 5 minutes par jour."
    },
    {
      question: "Comment puis-je être sûr(e) de la qualité du guide ?",
      answer: "Ce guide a été testé par plus de 2000 personnes avec un taux de réussite de 94%. Il contient des méthodes naturelles éprouvées et des conseils pratiques que vous pouvez appliquer immédiatement. Le contenu est dense et actionnable pour des résultats rapides."
    },
    {
      question: "Comment vais-je recevoir le guide après l'achat ?",
      answer: "Immédiatement après votre paiement, vous recevrez un email avec le lien de téléchargement de votre guide PDF. Vous pourrez le consulter sur tous vos appareils : ordinateur, tablette, smartphone. L'accès est illimité et à vie."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Toutes les réponses à vos questions avant de commander
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h3 className="font-semibold text-blue-900 mb-2">
              Vous avez une autre question ?
            </h3>
            <p className="text-blue-700 text-sm">
              Contactez-nous à <a href="mailto:contact@ventreplatnaturel.com" className="underline font-medium">contact@ventreplatnaturel.com</a>
              <br />Nous vous répondons sous 24h maximum
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;