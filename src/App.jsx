import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import "./App.scss";
import SideBar from "./component/SideBar";
import Main from "./component/MainComponent";
import Player from "./component/Player";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const fillMusicSection = async (artistName, querySelector) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        const data = await response.json();

        artistName === "queen" &&
          dispatch({
            type: "ADD_QEEN_SONG",
            payload: data.data.slice(0, 4),
          });

        artistName === "katyperry" &&
          dispatch({
            type: "ADD_KATY_PERRY_SONG",
            payload: data.data.slice(0, 4),
          });
        artistName === "eminem" &&
          dispatch({
            type: "ADD_EMINEM_SONG",
            payload: data.data.slice(0, 4),
          });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  fillMusicSection("queen", "#rockSection");
  fillMusicSection("katyperry", "#popSection");
  fillMusicSection("eminem", "#hipHopSection");

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
