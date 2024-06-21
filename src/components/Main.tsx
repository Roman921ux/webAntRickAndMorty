import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode
}

function Main({ children }: Props) {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default Main;

const Container = styled.div`
  padding: 15px;
  margin-top: 15px;
`;