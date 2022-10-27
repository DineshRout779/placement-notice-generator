import { Title, Container, Divider } from '@mantine/core';
import React from 'react';

function Header() {
  return (
    <Container>
      <Title order={3} size='h1' my={'sm'} weight={500} align='center'>
        Placement Notice Generator
      </Title>
      <Divider my='sm' />
    </Container>
  );
}

export default Header;
