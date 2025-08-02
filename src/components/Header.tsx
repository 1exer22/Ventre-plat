import React from "react";
import { Shield, Award, Users } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">VP</span>
            </div>
            <span className="font-bold text-xl text-gray-800">
              Ventre Plat Naturel
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4 text-green-500" />
              <span>+2000 personnes aidées</span>
            </div>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-blue-500" />
              <span>100% Naturel</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4 text-green-500" />
              <span>Méthode Testée</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
