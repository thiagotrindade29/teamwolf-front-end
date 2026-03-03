import React from 'react';
import FeaturedGames from './FeaturedGames';
import Classifications from './Classifications';
import SeasonPlayerDispute from './SeasonPlayerDispute';
import Comparison from './Comparison';
import FeaturedOdds from './FeaturedOdds';
import TwoPerformances from './TwoPerformances';
import About from './About';

const RightColumn = ({ featuredEvent, setFeaturedEvent }: any) => {
    return (
        <div className="space-y-4 w-full">
            {/* Jogos em Destaque */}
            <div className="bg-[#1b2124] rounded-2xl w-full">
                <FeaturedGames />
            </div>

            {/* Classificações FIFA/UEFA */}
            <div className="w-full">
                <Classifications />
            </div>

            {/* Disputa pelo Jogador da temporada */}
            <div className="w-full">
                <SeasonPlayerDispute />
            </div>

            {/* Comparação de Jogadores/Equipes */}
            <div className="w-full">
                <Comparison />
            </div>

            {/* Odds em Destaque */}
            <div className="w-full">
                <FeaturedOdds />
            </div>

            {/* Dois Desempenhos */}
            <div className="w-full">
                <TwoPerformances />
            </div>

            {/* Sobre */}
            <div className="w-full">
                <About />
            </div>
        </div>
    );
};

export default RightColumn;
