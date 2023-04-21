/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Col, Container, Form, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import { BsFillBookmarkFill, BsClipboardCheck, BsFillGearFill } from "react-icons/bs";
import { AiFillBell, AiFillYoutube } from "react-icons/ai";

import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

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
      <Navbar bg="white" expand="lg" sticky="top" className="mb-0 pb-0">
        <Container fluid>
          <Container className="d-flex">
            <Navbar.Brand href="#">
              <img
                className="mt-2"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
                width={40}
                height={40}
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Col xs={2}>
                <Form onSubmit={handleSubmit}>
                  <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search Jobs" />
                </Form>
              </Col>
              <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
                <Link to="/home" className="nav-link d-flex flex-column align-items-center">
                  <AiFillHome fontSize={25} />
                  <p style={{ fontSize: 12 }}>Home</p>
                </Link>
                <Nav.Link href="#MyNetwork" className="d-flex flex-column align-items-center">
                  <HiUsers fontSize={25} />
                  <p style={{ fontSize: 12 }}>My Network</p>
                </Nav.Link>

                <Link to="/Job" className="nav-link d-flex flex-column align-items-center">
                  <MdWork fontSize={25} />
                  <p style={{ fontSize: 12 }}>Jobs</p>
                </Link>

                <Nav.Link href="#Messging" className="d-flex flex-column align-items-center">
                  <TbMessageCircle fontSize={25} />
                  <p style={{ fontSize: 12 }}>Messaging</p>
                </Nav.Link>
                <Nav.Link href="#Notifications" className="d-flex flex-column align-items-center">
                  <IoMdNotifications fontSize={25} />
                  <p style={{ fontSize: 12 }}>Notifications</p>
                </Nav.Link>
                <NavDropdown className="border-end" title="Me" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Try premium for free</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Settings & Privacy </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Help </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Language</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="For Business" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Jobs</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Messaging</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Notifications</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link className="text-decoration-underline text-warning">Try premium Free</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
      <Container>
        {" "}
        <Row className="justify-content-md-center">
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
