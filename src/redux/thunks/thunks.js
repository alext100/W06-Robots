import axios from "axios";
import { deleteRobotAction, loadRobotsAction } from "../actions/actionCreator";

const urlApi = process.env.REACT_APP_API_URL;

export const loadRobotsThunk = () => {
  return async (dispatch) => {
    const { data: robots } = await axios.get(urlApi);
    dispatch(loadRobotsAction(robots));
  };
};

export const deleteRobotThunk = (idRobot) => async (dispatch) => {
  const { status } = await axios.delete(`${urlApi}/${idRobot}`);
  if (status === 200) {
    dispatch(deleteRobotAction(idRobot));
  }
};
