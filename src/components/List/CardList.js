import { useEffect } from "react";
import { CardGroup, Row } from "react-bootstrap";
import useRobots from "../../hooks/useRobots";
import CardComponent from "../Card/CardComponent";

const CardList = () => {
  const { robots, loadRobots } = useRobots();

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return (
    <CardGroup>
      <Row xs={1} md={2} className="g-3">
        {robots.map((robot) => (
          <CardComponent
            key={robot.id}
            id={robot.id}
            name={robot.name}
            image={robot.image}
            speed={robot.speed}
            resiliency={robot.resiliency}
            creationDate={robot.creationDate}
          />
        ))}
      </Row>
    </CardGroup>
  );
};

export default CardList;
