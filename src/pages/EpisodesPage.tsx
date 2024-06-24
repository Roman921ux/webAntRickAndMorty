import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Episode } from '../types';
import EpisodesItem from '../components/Episodes/EpisodesItem';
import { Block } from './CharactersPage';
import { useAtom } from 'jotai';
import { episodesAtom, isErrorAtom, isLoadingAtom } from '../atoms/useAtom';


function EpisodesPage() {
  const [episodes, setEpisodes] = useAtom(episodesAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [isError, setIsError] = useAtom(isErrorAtom);

  useEffect(() => {
    async function fetchEpisodes() {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/episode');
        if (!res.ok) {
          throw new Error("Ошибка при запросе")
        }
        const data = await res.json();
        setEpisodes(data.results)
        setIsLoading(false)
        // console.log(data)
      } catch (error) {
        console.error('При загрузке произошла ошибка');
        setIsError(true)
      }
    }
    fetchEpisodes()
      .then(() => console.log('Запрос успешно выполнен!'))
      .catch(error => console.error('Ошибка при запросе', error))

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
        {episodes.map(episode => <EpisodesItem key={episode.id} episode={episode} />)}
      </Block>
    </Container>
  );
}

export default EpisodesPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

