import React from 'react';
import { AlertCircle, Clock, Shirt, Users, Utensils, Frown } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Votre ventre se gonfle après chaque repas",
      description: "Même avec de petites portions, vous vous sentez ballonné(e) et inconfortable"
    },
    {
      icon: Shirt,
      title: "Vos vêtements deviennent serrés",
      description: "Impossible de porter vos tenues préférées à cause de ce ventre gonflé"
    },
    {
      icon: Clock,
      title: "Les ballonnements durent toute la journée",
      description: "De l'inconfort permanent qui vous gâche la vie quotidienne"
    },
    {
      icon: Users,
      title: "Vous vous sentez mal à l'aise en société",
      description: "Difficile de profiter des sorties et repas entre amis"
    },
    {
      icon: Utensils,
      title: "Vous ne savez plus quoi manger",
      description: "Chaque aliment semble provoquer des réactions digestives"
    },
    {
      icon: Frown,
      title: "Votre confiance en vous s'effrite",
      description: "Ce ventre gonflé impacte votre estime de soi au quotidien"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Vous aussi vous en avez marre de...
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ces problèmes de ballonnements qui empoisonnent votre quotidien et vous empêchent de vous sentir bien dans votre corps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 font-medium">
              <span className="text-blue-600">Bonne nouvelle :</span> Il existe une solution naturelle et efficace pour retrouver un ventre plat et améliorer votre digestion en seulement 14 jours !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;