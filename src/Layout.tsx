import styled from 'styled-components';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Main from './components/Main';

function Layout() {
  return (
    <Container>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  
`;