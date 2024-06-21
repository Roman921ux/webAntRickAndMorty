import styled from 'styled-components';
import { Character } from '../../types';

interface Props {
  character: Character
}

interface TitleProps {
  fontWeight?: string;
}

function CharacterItem({ character }: Props) {
  return (
    <Container>
      <IMG src={character.image} />
      <TextBlock>
        <Block style={{ marginBottom: '15px' }}>
          <Title fontWeight="--middle-w">{character.name}</Title>
          <Title fontWeight="small-w">{character.gender}</Title>
        </Block>
        <Title>{character.location.name}</Title>
        <Title>{character.status}</Title>
      </TextBlock>
    </Container>
  );
}

export default CharacterItem;

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