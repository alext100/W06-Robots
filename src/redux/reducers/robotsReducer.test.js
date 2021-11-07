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
});
