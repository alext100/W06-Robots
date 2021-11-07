import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRobotThunk,
  deleteRobotThunk,
  loadRobotsThunk,
  updateRobotThunk,
} from "../redux/thunks/thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobot = (idRobot) => {
    dispatch(deleteRobotThunk(idRobot));
  };

  const createRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };

  const updateRobot = (robot) => {
    dispatch(updateRobotThunk(robot));
  };

  return { robots, loadRobots, deleteRobot, createRobot, updateRobot };
};

export default useRobots;
