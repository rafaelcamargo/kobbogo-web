import { Container, Row, Col } from '@glorious/taslonic/react';
import { Logo } from '@src/base/components/logo/logo';

export const Home = () => {
  return (
    <Container>
      <Row offsetXs="10">
        <Col alignXs="center">
          <Logo />
        </Col>
      </Row>
      <Row>
        <Col alignXs="center">
          <h1>The simplest todo list ever made</h1>
        </Col>
      </Row>
    </Container>
  );
};
