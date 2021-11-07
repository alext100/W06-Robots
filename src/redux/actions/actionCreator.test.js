import { getRobots } from "../../factories/robotsFactory";
import { loadRobotsAction } from "./actionCreator";
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
