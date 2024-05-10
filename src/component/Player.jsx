import { Col, Container, Nav, ProgressBar, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const songForPlayer = useSelector((state) => state.song.songForPlayer);
  const songImage = songForPlayer && songForPlayer.album.cover_medium;
  const favoriteSong = useSelector((state) => state.song.favoriteSong);
  console.log(favoriteSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col className="col-lg-10 offset-lg-2">
          <Row
            id="row-play"
            className=" h-100 flex-column justify-content-center align-items-center"
          >
            <p id="p">
              {songImage && (
                <>
                  {favoriteSong ? (
                    <>
                      <i className="bi bi-bookmark-heart-fill "></i>
                    </>
                  ) : (
                    <i id="icon" className="bi bi-bookmark-heart-fill "></i>
                  )}
                  <img id="img-play" src={`${songImage}`} />
                  <span>
                    Track: {songForPlayer.title} <br />
                    Artist: {songForPlayer.artist.name}
                  </span>
                </>
              )}
            </p>

            <Col className="col-6 col-md-4 playerControls mb-3 ">
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
              <ProgressBar className=" mt-3" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
