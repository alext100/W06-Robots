import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobots;

  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;

    default:
      newRobots = [...robots];
  }
  return newRobots;
};

export default robotReducer;
