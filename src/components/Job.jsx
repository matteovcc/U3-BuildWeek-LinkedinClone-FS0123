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
        <Row>
          <Col xs={10} className="mx-auto">
            <h3 className="">Cerca lavoro per te</h3>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="cerca lavoro" />
            </Form>
          </Col>
          <Col xs={3} className="mt-3 bg-white rounded">
            <div className="mb-3 text-secondary">
              <BsFillBookmarkFill style={{ width: 20, height: 20, marginRight: "3px" }} /> Mie offerte di lavoro
            </div>
            <div className="mb-3 text-secondary">
              <AiFillBell style={{ width: 20, height: 20, marginRight: "3px" }} /> Avvisi offerte di lavoro
            </div>
            <div className="mb-3 text-secondary">
              {" "}
              <BsClipboardCheck style={{ width: 20, height: 20, marginRight: "3px" }} /> Valutazioni delle competenze
            </div>
            <div className="mb-3 text-secondary">
              <AiFillYoutube style={{ width: 20, height: 20, marginRight: "3px" }} /> Indicazioni per chi cerca lavoro{" "}
            </div>
            <div className="mb-3 text-secondary">
              {" "}
              <BsFillGearFill style={{ width: 20, height: 20, marginRight: "3px" }} />
              Impostazioni candidatura
            </div>
          </Col>
          <Col xs={6} className="bg-white mt-3 mx-auto rounded">
            {jobs.map(job => (
              <div key={job._id} className="mt-3 mb-2  rounded shadow-lg p-1">
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
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Job;
