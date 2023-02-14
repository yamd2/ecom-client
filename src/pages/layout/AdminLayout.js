import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <main className="main">
        <Container fluid>
          <Row>
            <Col xs="3" className="side-bar bg-dark text-light">
              <div className="mt-5">
                <div className="text-center fw-bolder">Admin Menu</div>
              </div>
              <hr />
              <div className="sidebar-menu">
                <ul>
                  <li>
                    <Link to="/dashboard">
                      <i class="fa-solid fa-gauge"></i>
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalog">
                      <i class="fa-sharp fa-solid fa-sitemap"></i>
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <Link to="/products">
                      <i class="fa-brands fa-product-hunt"></i>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/payment">
                      <i class="fa-solid fa-credit-card"></i>
                      Payment Methods
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders">
                      <i class="fa-solid fa-truck"></i>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link to="/customers">
                      <i class="fa-solid fa-credit-card"></i>
                      Customers
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings">
                      <i class="fa-sharp fa-solid fa-gears"></i>
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>

      <Footer />
    </div>
  );
};
