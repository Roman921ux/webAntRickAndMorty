import { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../api';
import { Location } from '../types';
import LocationItem from '../components/Locations/LocationItem';
import { Block } from './CharactersPage';

function LocationsPage() {
  const [locations, setLocations] = useState<Location[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    api.get('location')
      .then(body => {
        // console.log(body.data);
        setLocations(body.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Ошибка', error);
        setIsError(true);
        setIsLoading(false);
      })
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (isError) {
    return <h1>Ошибка</h1>
  }

  return (
    <Container>
      <Block>
        {locations.map(location => <LocationItem location={location} />)}
      </Block>
    </Container>
  );
}

export default LocationsPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;