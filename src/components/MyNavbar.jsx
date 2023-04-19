import React from "react";
import {
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

const MyNavbar = () => {
  return (
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
              <Form className="d-flex bg-white ">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/home"
                className="nav-link d-flex flex-column align-items-center"
              >
                <AiFillHome fontSize={25} />
                <p style={{ fontSize: 12 }}>Home</p>
              </Link>
              <Nav.Link
                href="#MyNetwork"
                className="d-flex flex-column align-items-center"
              >
                <HiUsers fontSize={25} />
                <p style={{ fontSize: 12 }}>My Network</p>
              </Nav.Link>
              <Nav.Link
                href="#Jobs"
                className="d-flex flex-column align-items-center"
              >
                <MdWork fontSize={25} />
                <p style={{ fontSize: 12 }}>Jobs</p>
              </Nav.Link>
              <Nav.Link
                href="#Messging"
                className="d-flex flex-column align-items-center"
              >
                <TbMessageCircle fontSize={25} />
                <p style={{ fontSize: 12 }}>Messaging</p>
              </Nav.Link>
              <Nav.Link
                href="#Notifications"
                className="d-flex flex-column align-items-center"
              >
                <IoMdNotifications fontSize={25} />
                <p style={{ fontSize: 12 }}>Notifications</p>
              </Nav.Link>
              <NavDropdown
                className="border-end"
                title="Me"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Account</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Try premium for free
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Settings & Privacy{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Help </NavDropdown.Item>
                <NavDropdown.Item href="#action5">Language</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="For Business" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Jobs</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Messaging</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Notifications
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link className="text-decoration-underline text-warning">
                Try premium Free
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
