import { ButtonGroup, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import useRobots from "../../hooks/useRobots";
import ButtonComponent from "../Button/ButtonComponent";
import "./CardComponent.css";

const CardComponent = ({
  name,
  image,
  speed,
  resiliency,
  creationDate,
  id,
}) => {
  const { deleteRobot } = useRobots();
  const actionOnClickUpdate = () => {};

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        className="card-image"
        variant="top"
        src={image}
        alt="Robot image"
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup
        className="list-group-flush"
        data-testid={"List-of-robot-caracteristics"}
      >
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
            actionOnClick={() => deleteRobot(id)}
            buttonText={"Delete"}
          />
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
