import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-light vh-100">
      <Header />
      <Container
        style={{
          paddingTop: 64,
        }}
      >
        {children}
      </Container>
    </div>
  );
}

export default Layout;
