import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRobotThunk, loadRobotsThunk } from "../redux/thunks/thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const deleteRobot = (idRobot) => {
    dispatch(deleteRobotThunk(idRobot));
  };

  return { robots, loadRobots, deleteRobot };
};

export default useRobots;
