import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <NavLink to={'/'} style={{ color: 'inherit', textDecoration: 'none' }}>Локации</NavLink>
      <NavLink to={'/episodes'} style={{ color: 'inherit', textDecoration: 'none' }}>Эпизоды</NavLink>
      <NavLink to={'/characters'} style={{ color: 'inherit', textDecoration: 'none' }}>Персонажи</NavLink>
      {/* <NavLink to={'/extra'} style={{ color: 'inherit', textDecoration: 'none' }}>Страница с Доп.Запросами</NavLink> */}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  border: 1px solid black;
  height: 80px;
  background: black;
  color: #fff;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

