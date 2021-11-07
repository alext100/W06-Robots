import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import useRobots from "../../hooks/useRobots";
import ButtonComponent from "../Button/Button";

const FormComponent = () => {
  const initialData = {
    name: "",
    image: "",
    speed: "",
    resiliency: "",
    creationDate: "",
  };
  const { createRobot } = useRobots();

  const [cardData, setCardData] = useState(initialData);

  const changeData = (event) => {
    setCardData({
      ...cardData,
      [event.target.id]: event.target.value,
    });
  };

  const resetForm = () => {
    setCardData(initialData);
  };

  const onCreateCard = (event) => {
    event.preventDefault();
    createRobot(cardData, cardData.id);
    resetForm();
  };

  return (
    <Form className="form-create" autoComplete="off" onSubmit={onCreateCard}>
      <Form.Group className="col-md-4" controlId="name">
        <Form.Label>Nombre de robot</Form.Label>
        <FloatingLabel controlId="name" label="Nombre..." className="mb-3">
          <Form.Control
            required
            placeholder="name"
            type="text"
            value={cardData.name}
            onChange={changeData}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="col-md-4" controlId="image">
        <Form.Label>Imagen</Form.Label>
        <FloatingLabel
          controlId="image"
          label="Url og image..."
          className="mb-3"
        >
          <Form.Control
            required
            placeholder="image"
            type="text"
            value={cardData.image}
            onChange={changeData}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="col-md-4" controlId="speed">
        <Form.Label>Velocidad</Form.Label>
        <FloatingLabel controlId="speed" label="0 - 10" className="mb-3">
          <Form.Control
            required
            placeholder="speed"
            type="text"
            value={cardData.speed}
            onChange={changeData}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="col-md-4" controlId="resiliency">
        <Form.Label>Resistencia</Form.Label>
        <FloatingLabel controlId="resiliency" label="0 - 10" className="mb-3">
          <Form.Control
            required
            placeholder="resiliency"
            type="text"
            value={cardData.resiliency}
            onChange={changeData}
          />
        </FloatingLabel>
      </Form.Group>

      <Form.Group className="col-md-4" controlId="creationDate">
        <Form.Label>Fecha de creación</Form.Label>
        <FloatingLabel controlId="creationDate" label="Fecha" className="mb-3">
          <Form.Control
            required
            placeholder="creationDate"
            type="date"
            value={cardData.creationDate}
            onChange={changeData}
          />
        </FloatingLabel>
      </Form.Group>

      <ButtonComponent
        className="m-3"
        buttonText="Create"
        actionOnClick={onCreateCard}
      />
    </Form>
  );
};

export default FormComponent;
