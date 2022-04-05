import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import drums from "./drums.jfif";

const Home = () => {
  return (
    <div>
      {/* <div className="Container">
        <div classname="Row">
          <div className="COl">1 of 2</div>
          <div className="COl">2 of 2</div>
        </div>
      </div> */}
      <Container>
        <Row>
          <Col>
            <h1>Welcome to drum world</h1>
            <p>
              Find all kinds of drums and instument here all at once. We provide
              the best drums to to enrich your music.
            </p>
          </Col>
          <Col>
            <img src={drums} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
