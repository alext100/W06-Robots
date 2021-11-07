import axios from "axios";
import { deleteRobotAction, loadRobotsAction } from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_API_URL;
const token = process.env.REACT_APP_TOKEN;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (idRobot) => async (dispatch) => {
  const { status } = await axios.delete(
    `${urlApi}/delete/${idRobot}?token=${token}`
  );
  if (status === 200) {
    dispatch(deleteRobotAction(idRobot));
  }
};
