import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { ChartsContainer, StatsContainer, Loading } from "../../components";

function Stats() {
  const dispatch = useDispatch();
  const { isLoading, monthlyApplications } = useSelector((store) => store.allJobs);
  useEffect(() => {
    dispatch(showStats());
    //eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats;
