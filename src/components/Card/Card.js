import { ButtonGroup, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ButtonComponent from "../Button/Button";
import "./Card.css";

const CardComponent = ({ name, image, speed, resiliency, creationDate }) => {
  /* const actionOnClickCreate = () => {}; */
  const actionOnClickUpdate = () => {};
  const actionOnClickDelete = () => {};

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        className="card-image"
        variant="top"
        src={image}
        alt="Robot image"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Velocidad: {speed}</ListGroupItem>
        <ListGroupItem>Resistencia: {resiliency}</ListGroupItem>
        <ListGroupItem>Fecha de creación: {creationDate}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <ButtonGroup className="offset-2 gap-sm-3" aria-label="Buttons">
          <ButtonComponent
            onClick={actionOnClickUpdate}
            buttonText={"Update"}
          />
          <ButtonComponent
            onClick={actionOnClickDelete}
            buttonText={"Delete"}
          />
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
