import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components'
//
import Layout from './Layout';
import LocationsPage from './pages/LocationsPage'
import EpisodesPage from './pages/EpisodesPage';
import CharactersPage from './pages/CharactersPage';
import ExtraRequestPage from './pages/ExtraRequestPage';

function App() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LocationsPage />} />
          <Route path='/episodes' element={<EpisodesPage />} />
          <Route path='/characters' element={<CharactersPage />} />
          <Route path='/extra' element={<ExtraRequestPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
`
