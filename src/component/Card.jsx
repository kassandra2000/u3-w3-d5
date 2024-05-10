import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  //   console.log(props.singlesong[0].id);
  const song = props.singlesong;
  const dispatch = useDispatch();

  const favoriteSong = useSelector((state) => state.song.favoriteSong);
  //   console.log(favoriteSong);
  return (
    <Row>
      <Col className="col-10">
        <div id="pop">
          <h2>{props.title}</h2>
          <Row
            className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id="popSection"
          >
            {song &&
              song.map((singleSong, i) => (
                <div key={singleSong.id} className="col text-center">
                  <img
                    className="img-fluid"
                    src={singleSong.album.cover_medium}
                    alt="track"
                    onClick={() =>
                      dispatch({
                        type: `ADD_SONG_FOR_PLAYER`,
                        payload: song[i],
                      })
                    }
                  />
                  <p id="p">
                    {favoriteSong ? (
                      <>
                        <i
                          onClick={() =>
                            dispatch({
                              type: `ADD_FAVORITE_SONG`,
                              payload: false,
                            })
                          }
                          className="bi bi-bookmark-heart-fill "
                        ></i>
                      </>
                    ) : (
                      <i
                        onClick={() =>
                          dispatch({
                            type: `ADD_FAVORITE_SONG`,
                            payload: true,
                          })
                        }
                        className="bi bi-bookmark-heart"
                      ></i>
                    )}
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
