import axios from "axios";
import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
// import { ChatState } from "../../context/ChatProvider";

const AdminNav = () => {
  return (
    <>
      {" "}
      <Navbar style={{ backgroundColor: "#a6b7ff", height: "5rem" }}>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SOPIFY ADMIN DASHBOARD</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/adminDashboard">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/clientdetails">
                <Nav.Link>All Clients</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/chat">
                <Nav.Link>My Chats</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/internList">
                <Nav.Link>Interns List </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/AllPaidClientList">
                <Nav.Link>Paid Client List </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/particularClient">
                <Nav.Link>Particular Client Info</Nav.Link>
              </LinkContainer> */}
              {/* <LinkContainer to="/approvalstatus">
                <Nav.Link>Approval Status</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNav;
