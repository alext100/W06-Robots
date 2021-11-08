import { datatype, image } from "faker";
import { name } from "faker/locale/en";
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

const factoryUsers = Factory.define(({ sequence }) => ({
  name: name,
}));

export const getRobot = () => factoryRobots.build();
export const getRobots = (total = 3) => factoryRobots.buildList(total);
export const getUser = () => factoryUsers.build();
