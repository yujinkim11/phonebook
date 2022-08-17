import styled from "styled-components";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ContactForm } from "./component/ContactForm";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Col>
          <ContactForm />
        </Col>
        <Col></Col>
      </Container>
    </div>
  );
}

export default App;
