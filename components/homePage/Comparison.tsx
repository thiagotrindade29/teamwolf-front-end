import React from 'react';

const Comparison = () => {
    return (
        <div className="space-y-2 w-full">
            {/* Player Comparison */}
            <div className="bg-[#1b2124] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#2c353a] transition-colors">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#1b2124] flex items-center justify-center text-xs">A</div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#1b2124] flex items-center justify-center text-xs">B</div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#1b2124] flex items-center justify-center text-xs">C</div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#1b2124] flex items-center justify-center text-xs ml-2">D</div>
                    <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#1b2124] flex items-center justify-center text-xs">E</div>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-blue-500 font-bold text-sm">Comparar jogadores</span>
                    <span className="text-blue-500">›</span>
                </div>
            </div>

            {/* Team Comparison */}
            <div className="bg-[#1b2124] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#2c353a] transition-colors">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-yellow-600 border-2 border-[#1b2124] flex items-center justify-center text-xs">ES</div>
                    <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-[#1b2124] flex items-center justify-center text-xs">AR</div>
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-[#1b2124] flex items-center justify-center text-xs text-black">RM</div>
                    <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-[#1b2124] flex items-center justify-center text-xs">BM</div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-[#1b2124] flex items-center justify-center text-xs">MC</div>
                </div>
                <div className="flex items-center space-x-1">
                    <span className="text-blue-500 font-bold text-sm">Comparar equipes</span>
                    <span className="text-blue-500">›</span>
                </div>
            </div>
        </div>
    );
};

export default Comparison;
