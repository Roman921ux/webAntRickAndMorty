import styled from 'styled-components';
import { Location } from '../../types';
import { TitleProps } from '../Characters/CharacterItem';

interface Props {
  location: Location
}

function LocationItem({ location }: Props) {
  return (
    <Container>
      {/* <IMG src={character.image} /> */}
      <TextBlock>
        <Block style={{ marginBottom: '15px' }}>
          <Title fontWeight="--middle-w">{location.type}</Title>
          <Title fontWeight="small-w">{location.name}</Title>
        </Block>
        <Title>Episode: {location.dimension}</Title>
        {/* <Title>{episode.name}</Title> */}
      </TextBlock>
    </Container>
  );
}

export default LocationItem;

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