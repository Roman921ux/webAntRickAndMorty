import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Character, CountInfo } from '../types';
import CharacterItem from '../components/Characters/CharacterItem';
import { useAtom } from 'jotai';
import { charactersAtom, isErrorAtom, isLoadingAtom } from '../atoms/useAtom';

function CharactersPage() {
  const [characters, setCharacters] = useAtom(charactersAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [isError, setIsError] = useAtom(isErrorAtom);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => {
        if (!response.ok) {
          setIsError(true)
          return new Error('Произошла ошибка')
        }
        return response.json()
      })
      .then(data => {
        // console.log('Результат запроса:', data);
        setIsLoading(false);
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('При загрузке данных произошла ошибка', error);
      })
    return () => {
      setIsLoading(true);
    }
  }, []);

  if (isLoading) {
    return <h1>Загрузка...</h1>
  }
  if (isError) {
    return <h1>Ошибка</h1>
  }

  return (
    <Container>
      <Block>
        {characters.map(character => <CharacterItem key={character.id} character={character} />)}
      </Block>
    </Container>
  );
}

export default CharactersPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 10px;
  row-gap: 50px;
  justify-content: space-between;
`;