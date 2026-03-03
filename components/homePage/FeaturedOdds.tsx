import React from 'react';

const FeaturedOdds = () => {
    return (
        <div className="bg-[#1b2124] rounded-2xl p-4 text-white font-sans w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-md">Odds em destaque</h3>
                <div className="flex items-center space-x-1 cursor-pointer hover:underline">
                    <span className="text-blue-500 font-bold text-xs">Aposte Agora</span>
                    <span className="text-blue-500">›</span>
                </div>
            </div>

            {/* Header row */}
            <div className="flex justify-end mb-2 text-xs text-gray-400 px-2 space-x-6">
                <span className="w-8 text-center">1</span>
                <span className="w-8 text-center">X</span>
                <span className="w-8 text-center">2</span>
            </div>

            {/* Match Rows */}
            <div className="space-y-2">
                {/* Match 1 */}
                <div className="flex items-center justify-between py-2 border-b border-gray-800">
                    <div className="flex flex-col text-xs font-semibold mr-2">
                        <span className="text-red-500">Ao vivo</span>
                        <div className="flex flex-col">
                            <span>Grafičar</span>
                            <span>FAP Priboj</span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-yellow-400 font-bold text-xs border border-gray-700 cursor-pointer hover:bg-gray-800">1.57▲</div>
                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-orange-400 font-bold text-xs border border-gray-700 cursor-pointer hover:bg-gray-800">3.40▼</div>
                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-green-400 font-bold text-xs border border-gray-700 cursor-pointer hover:bg-gray-800">6.00▲</div>
                    </div>
                </div>

                {/* Match 2 */}
                <div className="flex items-center justify-between py-2">
                    <div className="flex flex-col text-xs font-semibold mr-2">
                        <span className="text-red-500">Ao vivo</span>
                        <div className="flex flex-col">
                            <span>Drenica</span>
                            <span>KF Prishtina E Re</span>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-yellow-400 font-bold text-xs border border-gray-700 cursor-pointer hover:bg-gray-800">2.25▲</div>
                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-orange-400 font-bold text-xs border border-gray-700 cursor-pointer hover:bg-gray-800">3.00▼</div>
                        <div className="w-12 h-8 bg-black rounded flex items-center justify-center text-yellow-400 font-bold text-xs border border-gray-700 cursor-pointer hover:bg-gray-800">3.20▼</div>
                    </div>
                </div>
            </div>

             <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-800 text-xs text-gray-500">
                <span>Aposte com responsabilidade 18+</span>
                 <div className="flex items-center space-x-1">
                    <span>Oferecido por</span>
                    <span className="font-bold text-yellow-500">⚡multibet</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedOdds;
