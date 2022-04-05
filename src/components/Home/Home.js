import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
          <Col>Welcome to drum world</Col>
          <Col>
            <img src="" alt="" srcset="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
