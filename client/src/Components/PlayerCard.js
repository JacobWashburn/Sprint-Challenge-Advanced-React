import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid blue;
  border-radius: .5rem;
  width: 33%;
  margin: 3% auto;
`;

const Name = styled.h2`

`;

const Attribute = styled.h4`

`;

const PlayerCard = ({player}) => {
    return (
        <Card>
            <Name>Name: {player.name}</Name>
            <Attribute>Country: {player.country}</Attribute>
            <Attribute># of Searches: {player.searches}</Attribute>
        </Card>
    );
};

export default PlayerCard;