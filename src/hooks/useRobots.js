import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobotsThunk } from "../redux/thunks/thunks";

const useRobots = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return { robots, loadRobots };
};

export default useRobots;
