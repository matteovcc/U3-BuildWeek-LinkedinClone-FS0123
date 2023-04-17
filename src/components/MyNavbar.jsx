import React from "react";
import { Col, Container, Form, Nav, NavDropdown, Navbar } from "react-bootstrap";

import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid className="px-5 ">
        <Container className="d-flex px-5">
          <Navbar.Brand href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              width={40}
              height={40}
            />
          </Navbar.Brand>
          <Navbar.Toggle className="ms-auto" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col xs={2}>
              <Form className="d-flex bg-light">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              </Form>
            </Col>
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <Nav.Link href="#home" className="d-flex flex-column align-items-center">
                <AiFillHome />
                Home
              </Nav.Link>
              <Nav.Link href="#MyNetwork" className="d-flex flex-column align-items-center">
                <HiUsers />
                My Network
              </Nav.Link>
              <Nav.Link href="#Jobs" className="d-flex flex-column align-items-center">
                <MdWork />
                Jobs
              </Nav.Link>
              <Nav.Link href="#Messging" className="d-flex flex-column align-items-center">
                <TbMessageCircle />
                Messaging
              </Nav.Link>
              <Nav.Link href="#Notifications" className="d-flex flex-column align-items-center">
                <IoMdNotifications />
                Notifications
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

              <Nav.Link className="text-decoration-underline">Try premium Free</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
