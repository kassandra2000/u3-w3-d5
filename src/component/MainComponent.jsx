import { Col, Nav, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row >
        <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Nav.Link href="#">TRENDING</Nav.Link>
          <Nav.Link href="#">PODCAST</Nav.Link>
          <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
          <Nav.Link href="#">NEW RELEASES</Nav.Link>
          <Nav.Link href="#">DISCOVER</Nav.Link>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            ></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            ></Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
