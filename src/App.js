import { Row, Col, Container } from "react-bootstrap";
import FormComponent from "./components/Form/FormComponent";
import CardList from "./components/List/CardList";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <Col sm={7}>
            <CardList />
          </Col>
          <Col sm={5}>
            <LoginForm />
            <FormComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
