import { datatype, image } from "faker";
import { lorem } from "faker/locale/en_GB";
import { Factory } from "fishery";

const factoryRobots = Factory.define(({ sequence }) => ({
  id: sequence,
  name: lorem.words(3),
  image: image.imageUrl(),
  speed: datatype.number({
    min: 0,
    max: 10,
  }),
  resiliency: datatype.number({
    min: 0,
    max: 10,
  }),
  creationDate: datatype.string(),
}));

export const getRobot = () => factoryRobots.build();
export const getRobots = (total = 3) => factoryRobots.buildList(total);
