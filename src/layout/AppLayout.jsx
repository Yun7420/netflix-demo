import React from "react";
import { useState } from "react";
// React-Router
import { useNavigate, Outlet } from "react-router-dom";
// Style
import "./AppLayout.style.css";
// Bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// Image
import netflix_logo from "../assets/img/layout/netflix_logo.svg";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");

  // 이동
  const navigate = useNavigate();

  // Home 페이지 이동
  const goToHome = () => {
    navigate("/");
  };

  // Movies 페이지 이동
  const goToMovies = () => {
    navigate("/Movies");
  };

  // keyword 저장 및 찾기
  const searchByKeyword = (event) => {
    event.preventDefault();

    navigate(`/movies?q=${keyword}`);
    setKeyword("");
  };

  return (
    <div className="netflix">
      <div className="header">
        <Container>
          <Navbar expand="lg">
            <Navbar.Brand className="header_logo" onClick={goToHome}>
              <img src={netflix_logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Toggle type="button" className="toggle_btn" />
            <Navbar.Collapse>
              <Nav className="me-auto">
                <Nav.Link onClick={goToHome} className="text-white">
                  Home
                </Nav.Link>
                <Nav.Link onClick={goToMovies} className="text-white">
                  Movies
                </Nav.Link>
              </Nav>
              <Form
                className="d-flex"
                onSubmit={(event) => searchByKeyword(event)}
              >
                <Form.Control
                  type="search"
                  onChange={(event) => setKeyword(event.target.value)}
                  value={keyword}
                  placeholder="Search"
                />
                <Button type="submit" variant="danger">
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </div>

      <Outlet />

      <div className="footer">
        <Container>
          <div className="footer_info">
            <Navbar.Brand>
              <img src={netflix_logo} alt="logo" />
            </Navbar.Brand>
            <ul>
              <li>Representative : Han Sang Yun</li>
              <li>Phone : 010-7420-3477</li>
              <li>Email : hsy742010@gmail.com</li>
              <li>Address : Yonghyeon-dong, Incheon Metropolitan City</li>
            </ul>
            <div>
              <p>
                TMDB API를 사용하고 있으며 상업용 목적으로 제작된 홈페이지는
                아닙니다.
              </p>
              <p>
                We use the TMDB API and it is not a website that is designed for
                commercial purposes.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AppLayout;
