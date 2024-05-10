import { Col, Row } from "react-bootstrap"

const Card=(props)=>{

    console.log(props)
    console.log("ciao")
    return(
        <Row>
        <Col className="col-10">
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row
              className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="popSection"
            >
              {[].map((singleSong) => (
                <>
                  
                  <div className="col text-center">
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
                </>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    )
}

export default Card;