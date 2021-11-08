import axios from "axios";
import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAction,
  updateRobotAction,
} from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(`${urlApi}/robots`);
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (idRobot) => async (dispatch) => {
  const { status } = await axios.delete(
    `${urlApi}/robots/delete/${idRobot}?token=${token}`
  );
  if (status === 200) {
    dispatch(deleteRobotAction(idRobot));
  }
};

export const createRobotThunk = (robot) => {
  return async (dispatch) => {
    const { data: newRobot } = await axios.post(
      `${urlApi}/robots/create?token=${token}`,
      robot
    );
    dispatch(createRobotAction(newRobot));
  };
};

export const updateRobotThunk = (robot) => {
  return async (dispatch) => {
    const { data: modifiedRobot } = await axios.put(
      `${urlApi}/robots/update?token=${token}`,
      robot
    );
    dispatch(updateRobotAction(modifiedRobot));
  };
};
