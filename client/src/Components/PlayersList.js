import React from 'react';
import styled from 'styled-components';

import PlayerCard from './PlayerCard';

const PlayersListWrapper = styled.div`
  
`;


const PlayersList = ({players}) => {
    return (
        <PlayersListWrapper data-testid='List'>
            {players.map(player => <PlayerCard key={player.name} player={player}/>)}
        </PlayersListWrapper>
    );
};

export default PlayersList;
