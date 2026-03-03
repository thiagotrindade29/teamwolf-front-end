import React from 'react';

const About = () => {
    return (
        <div className="bg-[#1b2124] rounded-2xl p-6 text-white font-sans w-full">
            <h3 className="font-bold text-lg text-center mb-4">Sobre</h3>
            <div className="text-sm text-gray-300 leading-relaxed space-y-2">
                <p>
                    A página de resultados ao vivo de futebol no Team Wolf oferece placares em tempo real de todas as partidas em andamento.
                    O Team Wolf cobre centenas de ligas, copas e torneios de futebol, com resultados atualizados ao vivo, estatísticas, tabelas,
                    melhores momentos em vídeo e calendários de jogos.
                </p>
                <p>
                    Desde as ligas de futebol mais populares — <span className="text-blue-500 cursor-pointer hover:underline">UEFA Champions League</span>,
                    <span className="text-blue-500 cursor-pointer hover:underline">UEFA Europa League</span>, <span className="text-blue-500 cursor-pointer hover:underline">Premier League</span>,
                    <span className="text-blue-500 cursor-pointer hover:underline">LaLiga</span>, <span className="text-blue-500 cursor-pointer hover:underline">Bundesliga</span>,
                    <span className="text-blue-500 cursor-pointer hover:underline">Serie A</span>, <span className="text-blue-500 cursor-pointer hover:underline">Ligue 1</span>,
                    e <span className="text-blue-500 cursor-pointer hover:underline">Brasileirão Série A</span> — até as avaliações dos melhores jogadores,
                    estatísticas das partidas e todos os jogos de futebol do dia, nossa página de placares ao vivo tem tudo o que você precisa.
                </p>
                <p>
                    Para uma análise esportiva ainda mais avançada, confira nossa nova <span className="text-blue-500 cursor-pointer hover:underline">ferramenta de comparação de jogadores</span> para comparar seus jogadores favoritos lado a lado.
                </p>
            </div>
        </div>
    );
};

export default About;
