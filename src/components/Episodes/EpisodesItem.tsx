import styled from 'styled-components';
import { Episode } from '../../types';
import { TitleProps } from '../Characters/CharacterItem';

interface Props {
  episode: Episode
}

function EpisodesItem({ episode }: Props) {
  return (
    <Container>
      {/* <IMG src={character.image} /> */}
      <TextBlock>
        <Block style={{ marginBottom: '15px' }}>
          {/* <Title fontWeight="--middle-w">{character.name}</Title> */}
          <Title fontWeight="small-w">{episode.air_date}</Title>
        </Block>
        <Title>Episode: {episode.episode}</Title>
        <Title>{episode.name}</Title>
      </TextBlock>
    </Container>
  );
}

export default EpisodesItem;

const Container = styled.div`
  border: 1px solid rgba(1,1,1, 0.15);
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const IMG = styled.img`
  
`;

export const Title = styled.div<TitleProps>`
  font-size: var(--small-fs);
  font-weight: ${props => `var(${props.fontWeight})`};
`;
const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TextBlock = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;