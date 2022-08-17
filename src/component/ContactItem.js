import { Row, Col, Form, Button } from "react-bootstrap";

export const ContactItem = () => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        />
      </Col>
      <Col lg={11}>
        <div>채형원</div>
        <div>010-1111-1111</div>
      </Col>
    </Row>
  );
};
