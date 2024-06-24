import { useEffect, useState } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import styled from 'styled-components';
import api from '../api';
import { Location } from '../types';
import LocationItem from '../components/Locations/LocationItem';
import { Block } from './CharactersPage';
import { isErrorAtom, isLoadingAtom, locationsAtom } from '../atoms/useAtom';

function LocationsPage() {
  const [locations, setLocations] = useAtom(locationsAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [isError, setIsError] = useAtom(isErrorAtom);

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
    return () => {
      setIsLoading(true);
    }
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
        {locations.map(location => <LocationItem key={location.id} location={location} />)}
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