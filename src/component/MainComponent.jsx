import { Card, Col, Nav, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
const Main = () => {
  useSelector((state) => {
    return (
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <Nav.Link href="#">TRENDING</Nav.Link>
            <Nav.Link href="#">PODCAST</Nav.Link>
            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#">NEW RELEASES</Nav.Link>
            <Nav.Link href="#">DISCOVER</Nav.Link>
          </Col>
        </Row>

        <Card singleSong={state.song.eminemSong} />
        <Card singleSong={state.song.katyPerrySong} />
        <Card singleSong={state.song.queenSong} />

        {/* <Row>
        <Col className="col-10">
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="hipHopSection"
            ></Row>
          </div>
        </Col>
      </Row> */}
      </Col>
    );
  });
};

export default Main;
