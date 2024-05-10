import { Col, Row } from "react-bootstrap";

const Card = (props) => {
  //   console.log(props.singlesong[0].id);
  const song = props.singlesong;

  return (
    <Row>
      <Col className="col-10">
        <div id="pop">
          <h2>{props.title}</h2>
          <Row
            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="popSection"
          >
            {song&&song.map((singleSong) => (
              <div key={singleSong.id} className="col text-center">
                <img
                  className="img-fluid"
                  src={singleSong.album.cover_medium}
                  alt="track"
                />
                <p>
                  Track: {singleSong.title} <br />
                  Artist: {singleSong.artist.name}
                </p>
              </div>
            ))}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Card;
