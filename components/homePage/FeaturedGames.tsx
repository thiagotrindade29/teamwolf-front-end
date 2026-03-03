import React from 'react';
import Image from 'next/image';

const FeaturedGames = () => {
  return (
    <div className="w-full bg-[#1b2124] rounded-2xl p-4 text-white font-sans">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 relative">
           {/* Placeholder for league logo */}
           <div className="w-full h-full bg-green-900 rounded-full flex items-center justify-center text-xs">BB</div>
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-300">Brasileirão Betano</span>
            <span className="text-xs text-gray-500">Rodada 38</span>
        </div>
      </div>

      {/* Match Info */}
      <div className="flex justify-between items-center mb-8 px-2">
        {/* Home Team */}
        <div className="flex flex-col items-center space-y-2 w-1/3">
          <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-2xl">★</div>
          <span className="font-bold text-sm text-center">Botafogo</span>
        </div>

        {/* Date/Time */}
        <div className="flex flex-col items-center space-y-1 w-1/3">
          <span className="font-bold text-lg">25/02/2026</span>
          <span className="text-gray-400 text-sm">15:00</span>
        </div>

        {/* Away Team */}
        <div className="flex flex-col items-center space-y-2 w-1/3">
          <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center text-2xl text-white">V</div>
          <span className="font-bold text-sm text-center">Vitória</span>
        </div>
      </div>

      {/* Vote Section */}
      <div className="bg-[#2c353a] rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-md">Quem vencerá?</span>
            <span className="text-gray-400 text-xs">Vote agora!</span>
            <span className="text-gray-400">🏆</span>
        </div>
        
        <div className="flex justify-between space-x-2">
            <button className="flex-1 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors flex justify-center items-center">
                <span className="text-xl">★</span>
            </button>
            <button className="flex-1 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors text-sm font-bold">
                X
            </button>
            <button className="flex-1 py-2 rounded-lg border border-gray-600 hover:bg-gray-700 transition-colors flex justify-center items-center">
                <span className="text-xl text-red-500">V</span>
            </button>
        </div>
      </div>

      {/* Odds Section */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-400 mb-1 px-1">
            <span>Resultado final</span>
        </div>
        <div className="flex justify-between space-x-2 bg-[#1b2124] rounded-lg">
            <div className="flex-1 bg-black rounded p-2 flex justify-between items-center cursor-pointer hover:bg-gray-900">
                <span className="text-gray-400 text-xs">1</span>
                <span className="text-green-400 font-bold text-sm">▲1.62</span>
            </div>
            <div className="flex-1 bg-black rounded p-2 flex justify-between items-center cursor-pointer hover:bg-gray-900">
                <span className="text-gray-400 text-xs">X</span>
                <span className="text-red-400 font-bold text-sm">▼3.60</span>
            </div>
            <div className="flex-1 bg-black rounded p-2 flex justify-between items-center cursor-pointer hover:bg-gray-900">
                <span className="text-gray-400 text-xs">2</span>
                <span className="text-red-400 font-bold text-sm">▼5.25</span>
            </div>
        </div>
        <div className="flex justify-between items-center mt-2 px-1">
            <div className="flex items-center space-x-1">
                <span className="text-yellow-500 text-xs">⚡</span>
                <span className="text-gray-400 text-xs font-bold">multibet</span>
            </div>
            <span className="text-blue-400 text-xs font-semibold cursor-pointer hover:underline">Odds adicionais ⌄</span>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-800">
        <span className="text-blue-500 text-xs cursor-pointer font-bold">‹ Anterior</span>
        <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        </div>
        <span className="text-blue-500 text-xs cursor-pointer font-bold">Próximo ›</span>
      </div>

    </div>
  );
};

export default FeaturedGames;
