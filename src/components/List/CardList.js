import { CardGroup, Row } from "react-bootstrap";
import CardComponent from "../Card/Card";

const CardList = () => {
  const robots = [
    {
      _id: "6185c1ad9f1964f08e62d12f",
      name: "Nao",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/1200px-Nao_Robot_%28Robocup_2016%29.jpg",
      speed: 5,
      resiliency: 5,
      creationDate: "2021-11-15T02:24:00.000Z",
      __v: 0,
    },
    {
      _id: "6185c1af9f1964f08e62d131",
      name: "Ruko",
      image: "https://m.media-amazon.com/images/I/616gY8nYY7L._AC_SX425_.jpg",
      speed: 5,
      resiliency: 5,
      creationDate: "2021-11-15T02:24:00.000Z",
      __v: 0,
    },
    {
      _id: "6185cf5b300bda26cb1982b9",
      name: "Robot in red",
      image:
        "https://www.zdnet.com/a/hub/i/2021/02/13/25176f85-a74c-47db-8c39-be4245c9d008/istock-1216869281.jpg",
      speed: 5,
      resiliency: 5,
      creationDate: "2021-11-15T02:24:00.000Z",
      __v: 0,
    },
    {
      _id: "6185c1ad9f15678e62d12f",
      name: "Nao",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/1200px-Nao_Robot_%28Robocup_2016%29.jpg",
      speed: 5,
      resiliency: 5,
      creationDate: "2021-11-15T02:24:00.000Z",
      __v: 0,
    },
    {
      _id: "6185c1af9f1964f08e625671",
      name: "Ruko",
      image: "https://m.media-amazon.com/images/I/616gY8nYY7L._AC_SX425_.jpg",
      speed: 5,
      resiliency: 5,
      creationDate: "2021-11-15T02:24:00.000Z",
      __v: 0,
    },
    {
      _id: "6185cf5b300bda26cb19577",
      name: "Robot in red",
      image:
        "https://www.zdnet.com/a/hub/i/2021/02/13/25176f85-a74c-47db-8c39-be4245c9d008/istock-1216869281.jpg",
      speed: 5,
      resiliency: 5,
      creationDate: "2021-11-15T02:24:00.000Z",
      __v: 0,
    },
  ];

  return (
    <CardGroup>
      <Row xs={1} md={2} className="g-3">
        {robots.map((robot) => (
          <CardComponent
            key={robot._id}
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
