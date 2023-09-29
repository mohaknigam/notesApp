import { Container, Row, Button } from "react-bootstrap";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row className="row">
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One Safe place for all your notes.</p>
            </div>
          </div>
          <div className="buttonContainer">
            <Link to={"/login"}>
              <Button size="lg" className="landingbutton">
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                size="lg"
                className="landingbutton"
                variant="outline-primary"
              >
                Signup
              </Button>
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
