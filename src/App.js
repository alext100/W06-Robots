import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import FormComponent from "./components/Form/FormComponent";
import CardList from "./components/List/CardList";

function App() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col sm={7}>
            <CardList />
          </Col>
          <Col sm={5}>
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
