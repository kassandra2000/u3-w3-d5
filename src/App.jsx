import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.scss";
import SideBar from "./component/SideBar";
import Main from "./component/MainComponent";
import Player from "./component/Player";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const fillMusicSection = async (artistName, t, typeArtist) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const data = await response.json();

        dispatch({
          type: `${typeArtist}`,
          payload: data.data.slice(0, 4),
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  fillMusicSection("queen", "#rockSection", "ADD_QEEN_SONG");
  fillMusicSection("katyperry", "#popSection", "ADD_KATY_PERRY_SONG");
  fillMusicSection("eminem", "#hipHopSection", "ADD_EMINEM_SONG");

  return (
    <>
      <Container fluid>
        <Row>
          <SideBar />

          <Main />
        </Row>
      </Container>

      <Player />
    </>
  );
}

export default App;
