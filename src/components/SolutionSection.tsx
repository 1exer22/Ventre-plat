import React from 'react';
import { Leaf, Apple, Activity } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const steps = [
    {
      icon: Leaf,
      number: "01",
      title: "Détox Naturelle",
      subtitle: "Purifiez votre système digestif",
      description: "Découvrez les ingrédients naturels qui vont nettoyer en douceur votre système digestif et éliminer les toxines responsables des ballonnements.",
      benefits: ["Drainage lymphatique", "Élimination des toxines", "Rééquilibrage intestinal"]
    },
    {
      icon: Apple,
      number: "02", 
      title: "Alimentation Adaptée",
      subtitle: "Mangez sans vous priver",
      description: "Un plan alimentaire personnalisé qui vous permet de savourer vos repas tout en réduisant les ballonnements de 80% dès la première semaine.",
      benefits: ["Aliments anti-ballonnements", "Combinaisons optimales", "Recettes savoureuses"]
    },
    {
      icon: Activity,
      number: "03",
      title: "Mouvement Minimal",
      subtitle: "5 minutes par jour suffisent",
      description: "Des exercices doux et ciblés qui stimulent la digestion et tonifient votre ventre sans avoir besoin d'aller en salle de sport.",
      benefits: ["Techniques digestives", "Renforcement core", "Amélioration posture"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Découvrez la méthode en 3 étapes qui a aidé 
            <span className="text-green-600"> plus de 2000 personnes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une approche progressive et naturelle pour retrouver un ventre plat durablement
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Visual */}
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-12 relative overflow-hidden">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="text-6xl font-bold text-gray-200 absolute top-4 right-4">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-blue-600">Étape {step.number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-green-600 font-medium mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {step.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Résultat : Un ventre plat et une digestion parfaite en 14 jours !
            </h3>
            <p className="text-lg text-gray-600">
              Cette méthode a été testée et approuvée par des milliers de personnes qui ont retrouvé confiance en elles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;