import { Form, InputGroup } from "react-bootstrap";
import styles from "./modules/navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import {
  FaHouse,
  FaMagnifyingGlass,
  FaSearchengin,
  FaSliders,
} from "react-icons/fa6";

export default function AppNavbar() {
  return (
    <Navbar expand="lg" className={styles.nav} sticky="top">
      <Container>
        <Navbar.Brand>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className={styles.appTitle}
          >
            WeMovies
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form>
              <InputGroup>
                <InputGroup.Text
                  id="filterButton"
                  className={styles.filterButton}
                >
                  <FaSliders />
                </InputGroup.Text>
                <Form.Control
                  id="search"
                  placeholder="Movie name"
                  aria-label="Movie name"
                  aria-describedby="basic-addon1"
                  className={styles.searchInput}
                />
                <InputGroup.Text
                  id="seacrhButton"
                  className={styles.searchButton}
                >
                  <FaMagnifyingGlass />
                </InputGroup.Text>
              </InputGroup>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
