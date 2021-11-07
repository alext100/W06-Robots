import { getRobot, getRobots } from "../../factories/robotsFactory";
import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAction,
  updateRobotAction,
} from "./actionCreator";
import actionTypes from "./actionTypes";

describe("Given a loadRobotsAction actionCreator", () => {
  describe("When it receives a list of robots", () => {
    test("Then it should return a load type action with the robots received", () => {
      const robots = getRobots();
      const expectedAction = {
        type: actionTypes.loadRobots,
        robots: robots,
      };

      const actionResult = loadRobotsAction(robots);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a deleteRobotAction actionCreator", () => {
  describe("When it receives an id", () => {
    test("Then it should return a delete type action with the id received", () => {
      const id = 2;
      const expectedAction = {
        type: actionTypes.deleteRobot,
        id,
      };

      const actionResult = deleteRobotAction(id);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given a createRobotAction actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a create type action with the robot received", () => {
      const robots = getRobots();
      const expectedAction = {
        type: actionTypes.createRobot,
        robot: robots,
      };

      const actionResult = createRobotAction(robots);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});

describe("Given an updateRobotAction actionCreator", () => {
  describe("When it receives a robot", () => {
    test("Then it should return a update type action with the robot received", () => {
      const modifiedRobot = getRobot();
      const expectedAction = {
        type: actionTypes.updateRobot,
        robot: modifiedRobot,
      };

      const actionResult = updateRobotAction(modifiedRobot);

      expect(actionResult).toEqual(expectedAction);
    });
  });
});
