import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";

const SideBar = () => {
  return (
    <Col className=" col-2">
      <Navbar
        className="navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <Container className="flex-column align-items-start">
          <Navbar.Brand href="index.html">
            <img
              src="assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Navbar.Toggle className="navbar-toggler-icon"></Navbar.Toggle>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav>
              <ul>
                <li>
                  <Nav.Link
                    className="nav-item  d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    className="nav-item  d-flex align-items-center"
                    href="#"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Nav.Link>
                </li>
                <li>
                  <InputGroup className=" mt-3 ">
                    <FormControl
                      id="form"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <InputGroup className="input-group-append w-25">
                      <Button
                        variant=" "
                        className=" btn-outline-secondary btn-sm h-100"
                      >
                        GO
                      </Button>
                    </InputGroup>
                  </InputGroup>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          
          <Nav.Link className="d-inline-block" href="#">Cookie Policy </Nav.Link>|<Nav.Link className="d-inline" href="#"> Privacy</Nav.Link>
        </div>
      </Navbar>
    </Col>
  );
};
export default SideBar;
