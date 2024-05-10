import { Col, Container, Nav, ProgressBar, Row } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row className=" h-100 flex-column justify-content-center align-items-center">
            <Col className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </Nav.Link>
                <Nav.Link href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </Nav.Link>
              </div>
              <ProgressBar className=" mt-3">
                <div role="progressbar"></div>
              </ProgressBar>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
