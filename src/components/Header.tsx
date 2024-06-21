import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <NavLink to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>Locations</NavLink>
      <NavLink to={'/episodes'} style={{ color: 'inherit', textDecoration: 'none' }}>Episodes</NavLink>
      <NavLink to={'/characters'} style={{ color: 'inherit', textDecoration: 'none' }}>Characters</NavLink>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  border: 1px solid black;
  height: 80px;
  background: black;
  color: #fff;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

