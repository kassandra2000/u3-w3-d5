import { Col, Nav, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Card from "./Card";
const Main = () => {
  const eminemSongs = useSelector((state) => state.song.eminemSong);
  const katyPerrySongs = useSelector((state) => state.song.katyPerrySong);
  const queenSongs = useSelector((state) => state.song.queenSong);
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

      <Card title={"Rock Classics"} singlesong={eminemSongs} />
      <Card title={"Pop Culture"} singlesong={katyPerrySongs} />
      <Card title={"HipHop"} singlesong={queenSongs} />
    </Col>
  );
};

export default Main;
