/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { BsFillBookmarkFill, BsClipboardCheck, BsFillGearFill } from "react-icons/bs";
import { AiFillBell, AiFillYoutube } from "react-icons/ai";
const Job = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query}`
        // "https://strive-benchmark.herokuapp.com/api/jobs"
      );
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        console.log(data);
      } else {
        console.log("error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="cerca lavoro" />
            </Form>
          </Col>

          <Col lg={2} className="d-none d-lg-block mt-3 pt-3 bg-white rounded">
            <div className="mb-3">
              <BsFillBookmarkFill style={{ color: "#535c68", width: 20, height: 20, marginRight: "3px" }} /> My Jobs
            </div>
            <div className="mb-3">
              <AiFillBell style={{ color: "#535c68", width: 20, height: 20, marginRight: "3px" }} /> Jobs alerts
            </div>
            <div className="mb-3">
              {" "}
              <BsClipboardCheck style={{ color: "#535c68", width: 20, height: 20, marginRight: "3px" }} /> Demonstrate
              skills
            </div>
            <div className="mb-3">
              <AiFillYoutube style={{ color: "#535c68", width: 20, height: 20, marginRight: "3px" }} /> Interview prep
            </div>
            <div className="mb-3 ">
              {" "}
              <BsFillGearFill style={{ color: "#535c68", width: 20, height: 20, marginRight: "6px" }} />
              Application settings
            </div>
          </Col>

          <Col xs={10} lg={5} className="bg-white mt-3 ms-4 rounded">
            {jobs.map(job => (
              <div key={job._id} className="mt-3 mb-2 p-1">
                <div className="d-flex justify-content-between">
                  <p className="text-primary fw-semibold">{job.title}</p>
                  <p className="">
                    <a className="text-secondary fw-semibold" href={job.url}>
                      {job.company_name}{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fillRule="currentColor"
                        className="bi bi-bookmark mx-2"
                        viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="mt-0">
                  <p className="">{job.job_type}</p>
                  <p>{job.category}</p>
                  <small>Area:{job.candidate_required_location}</small>
                </div>
                <div className="text-end">
                  <small>{job.publication_date}</small>
                </div>
                <hr />
              </div>
            ))}
          </Col>
          <Col lg={3} className="d-none d-lg-block bg-white mt-3 pt-3 ms-4 rounded">
            <p className="ms-1 fw-bold mb-0">Open to work</p>
            <p className=" ms-1 text-secondary" style={{ fontSize: "small" }}>
              Reccomended based on your activity
            </p>
            <p className="ms-1">
              Get more InMails from recruiters when you are #OpenToWork - you control who sees this
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Job;
