import React from 'react';

const SeasonPlayerDispute = () => {
    const players = [
        { rank: 1, name: 'Danilo', team: 'Botafogo', rating: '8.03', color: 'bg-teal-500' },
        { rank: 2, name: 'Carlos Vinícius', team: 'Grêmio', rating: '8.00', color: 'bg-teal-500' },
        { rank: 3, name: 'Andreas Pereira', team: 'Palmeiras', rating: '8.00', color: 'bg-teal-500' },
        { rank: 4, name: 'Breno Lopes', team: 'Coritiba', rating: '7.87', color: 'bg-green-500' },
        { rank: 5, name: 'Nonato', team: 'Fluminense', rating: '7.80', color: 'bg-green-500' },
    ];

    return (
        <div className="bg-[#1b2124] rounded-2xl p-4 text-white font-sans w-full">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                    <span className="text-xl">🏆</span>
                    <h3 className="font-bold text-sm leading-tight">Disputa pelo Jogador da<br />temporada</h3>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-xs border border-gray-600 rounded-full px-2 py-0.5">ⓘ</span>
                    <div className="bg-[#2c353a] px-3 py-1 rounded-lg flex items-center space-x-2 cursor-pointer border border-gray-700 hover:bg-gray-700 transition-colors">
                        <div className="w-4 h-4 bg-green-900 rounded-full flex items-center justify-center text-[8px]">BB</div>
                        <span className="text-xs font-semibold">Brasileirão Betano</span>
                        <span className="text-[10px]">▼</span>
                    </div>
                </div>
            </div>

            {/* Players List */}
            <div className="space-y-0">
                {players.map((player, index) => (
                    <div key={index} className={`flex items-center py-3 ${index !== players.length - 1 ? 'border-b border-gray-800' : ''} hover:bg-[#2c353a] transition-colors cursor-pointer px-2 -mx-2 rounded-lg`}>
                        {/* Rank */}
                        <div className="w-6 text-center text-sm font-semibold text-gray-300 mr-2">{player.rank}</div>

                        {/* Avatar */}
                        <div className="relative mr-3">
                            <div className="w-10 h-10 bg-gray-600 rounded-full overflow-hidden border-2 border-gray-700">
                                {/* Placeholder for player image */}
                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-300">👤</div>
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-800 rounded-full border border-gray-600 flex items-center justify-center">
                                {/* Placeholder for team logo */}
                                <div className="text-[8px]">⚽</div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                            <div className="text-sm font-bold text-white">{player.name}</div>
                            <div className="text-xs text-gray-400">{player.team}</div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-6 ${player.color} rounded-sm`}></div>
                            <span className="font-bold text-lg">{player.rating}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeasonPlayerDispute;
