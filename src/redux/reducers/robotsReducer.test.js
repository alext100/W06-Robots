import { getRobot, getRobots } from "../../factories/robotsFactory";
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives a robots list and a create action with a new robot", () => {
    test("Then it should return a new robots list including the new robot", () => {
      const initialRobotsList = getRobots(3);
      const newRobot = getRobot();
      const action = {
        type: actionTypes.createRobot,
        robot: newRobot,
      };

      const newList = robotsReducer(initialRobotsList, action);

      expect(newList).toContainEqual(newRobot);
    });
  });
  describe("When it receives an empty robots list and a load action with three robots", () => {
    test("Then it should return a new robots list with the three robots received", () => {
      const initialRobots = [];
      const robots = getRobots(3);
      const action = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const newList = robotsReducer(initialRobots, action);

      expect(newList).toEqual(robots);
    });
  });
});
