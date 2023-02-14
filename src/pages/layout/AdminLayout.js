import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};
