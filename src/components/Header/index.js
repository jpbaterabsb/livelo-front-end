import React from 'react';

import title from '~/assets/img/title.png';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <img src={title} alt="Livelo" />
      </Content>
    </Container>
  );
}
