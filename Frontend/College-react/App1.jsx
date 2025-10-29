import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap'; // <-- import Bootstrap components

function App() {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>1 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>1 of 3</Col>
            <Col>1 of 3</Col>
          </Row>
        </Container>
      </div>
      <div>
        Hi Student
      </div>
    </>
  );
}

export default App;

