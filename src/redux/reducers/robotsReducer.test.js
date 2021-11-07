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

  describe("When it receives a robots list and a delete action with an id", () => {
    test("Then it should return a new robots list without the robot received", () => {
      const initialRobots = getRobots(3);
      const robotToDelete = initialRobots[0];
      const action = {
        type: actionTypes.deleteRobot,
        id: robotToDelete.id, // test failed when in robotsReducer used '_id'
      };

      const newRobotsList = robotsReducer(initialRobots, action);

      expect(newRobotsList).not.toContainEqual(robotToDelete);
    });
  });

  describe("When it receives a robots list and a update action with a robot", () => {
    test("Then it should return a new robots list including the modified robot", () => {
      const initialRobots = getRobots(3);
      const modifiedRobot = {
        ...initialRobots[1],
        speed: 3,
        name: "Modified robot",
      };
      const action = {
        type: actionTypes.updateRobot,
        robot: modifiedRobot,
      };

      const newList = robotsReducer(initialRobots, action);

      expect(newList).toContainEqual(modifiedRobot);
    });
  });
});
