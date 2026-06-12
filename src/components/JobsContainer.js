import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import Job from "./Job";
import Loading from "./Loading";
import { useEffect } from "react";
import { getAllJobs } from "../features/allJobs/allJobsSlice";
import PageBtnContainer from "./PageBtnContainer";
import { downloadCSV } from "../utils/exportToCSV";
import moment from "moment";
import customFetch from "../utils/axios";
import { toast } from "react-toastify";

function JobsContainer() {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return <Loading center />;
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  const exportData = async () => {
    try {
      let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&limit=${totalJobs || 1000}`;
      if (search) {
        url = url + `&search=${search}`;
      }
      const response = await customFetch.get(url);
      const allJobsFetched = response.data.jobs;

      const cleanData = allJobsFetched.map((job) => ({
        Company: job.company,
        Position: job.position,
        Location: job.jobLocation,
        Type: job.jobType,
        Status: job.status,
        Date: moment(job.createdAt).format("MMM Do, YYYY"),
      }));

      downloadCSV(cleanData, "my-all-jobs.csv");
      toast.success("Job data exported successfully!");
    } catch (error) {
      toast.error("Please try again later");
    }
  };

  return (
    <Wrapper>
      <div className="title-container">
        <h5>
          {totalJobs} job{jobs.length > 1 && "s"} found
        </h5>
        <button className="btn" onClick={exportData}>
          Export CSV
        </button>
      </div>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
}

export default JobsContainer;
