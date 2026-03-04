import { Image } from '@nextui-org/react';
import React, { useState } from 'react';

interface DisplayImageProps {
    className?: string;
    src: string;
    width?: number;
    height?: number;
    alt: string;
    onErrorImage?: 'team' | 'player' | 'manager' | 'tournament' | 'flag';
}

const DisplayImage = ({ className, src, width, height, alt, onErrorImage }: DisplayImageProps) => {
    // Iniciamos o estado com a URL original recebida via props
    const [currentSrc, setCurrentSrc] = useState(src);

    // Mapeamento de placeholders oficiais do SofaScore
    const placeholders = {
        player: 'https://www.sofascore.com/static/images/placeholders/player.svg',
        manager: 'https://www.sofascore.com/static/images/placeholders/player.svg',
        team: 'https://www.sofascore.com/static/images/placeholders/team.svg',
        tournament: 'https://www.sofascore.com/static/images/placeholders/tournament.svg',
        flag: 'https://www.sofascore.com/static/images/placeholders/team.svg', // ou uma bandeira padrão
    };

    const handleError = () => {
        // Define o placeholder baseado no tipo, ou usa o de 'team' como padrão
        const fallback = onErrorImage ? placeholders[onErrorImage] : placeholders.team;

        // Só atualiza se o src atual for diferente do fallback para evitar loop infinito
        if (currentSrc !== fallback) {
            setCurrentSrc(fallback);
        }
    };

    return (
        <Image
            className={className}
            src={currentSrc}
            width={width}
            height={height}
            alt={alt || 'image'}
            onError={handleError}
        // Removido o onLoad que resetava o src, pois causava instabilidade na troca
        />
    );
};

export default DisplayImage;