import React from 'react';

const TwoPerformances = () => {
    return (
        <div className="bg-[#1b2124] rounded-2xl p-4 text-white font-sans w-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-md text-center w-full">Dois desempenhos</h3>
                <span className="text-gray-400 text-xs border border-gray-600 rounded-full px-2 py-0.5 absolute right-4">ⓘ</span>
            </div>

            <div className="space-y-4">
                {/* Player 1 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-bold w-4">1</span>
                        <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden border border-gray-500">
                             {/* Placeholder */}
                             <div className="w-full h-full flex items-center justify-center text-xs">FD</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Frenkie de Jong</span>
                            <span className="text-xs text-gray-400">Midfielder</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-xs">⚽</span>
                         <div className="flex items-center bg-black px-2 py-1 rounded border border-gray-700 space-x-1">
                            <div className="w-4 h-4 rounded-full bg-blue-800 text-[8px] flex items-center justify-center">B</div>
                            <span className="text-xs font-bold">3 - 0</span>
                            <div className="w-4 h-4 rounded-full bg-red-800 text-[8px] flex items-center justify-center">V</div>
                        </div>
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-sm">10</div>
                    </div>
                </div>

                 {/* Player 2 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-bold w-4">2</span>
                        <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden border border-gray-500">
                             {/* Placeholder */}
                             <div className="w-full h-full flex items-center justify-center text-xs">AS</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Aral Şimşir</span>
                            <span className="text-xs text-gray-400">Midfielder</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-xs">⚽2</span>
                        <span className="text-gray-400 text-xs">👟2</span>
                         <div className="flex items-center bg-black px-2 py-1 rounded border border-gray-700 space-x-1">
                            <div className="w-4 h-4 rounded-full bg-blue-400 text-[8px] flex items-center justify-center">M</div>
                            <span className="text-xs font-bold">0 - 4</span>
                            <div className="w-4 h-4 rounded-full bg-red-600 text-[8px] flex items-center justify-center">M</div>
                        </div>
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-sm">10</div>
                    </div>
                </div>

                 {/* Player 3 */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <span className="text-gray-400 font-bold w-4">3</span>
                        <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden border border-gray-500">
                             {/* Placeholder */}
                             <div className="w-full h-full flex items-center justify-center text-xs">HS</div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">Hugo Souza</span>
                            <span className="text-xs text-gray-400">Goleiro</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-400 text-xs">🧤4</span>
                         <div className="flex items-center bg-black px-2 py-1 rounded border border-gray-700 space-x-1">
                            <div className="w-4 h-4 rounded-full bg-green-800 text-[8px] flex items-center justify-center">C</div>
                            <span className="text-xs font-bold">1 - 1</span>
                            <div className="w-4 h-4 rounded-full bg-white text-black text-[8px] flex items-center justify-center">C</div>
                        </div>
                        <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold text-sm">9.7</div>
                    </div>
                </div>
            </div>

            <div className="mt-4 text-center cursor-pointer hover:underline">
                <span className="text-blue-500 text-sm font-semibold">Mostrar mais ⌄</span>
            </div>
        </div>
    );
};

export default TwoPerformances;
