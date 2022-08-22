import { Row, Col } from "react-bootstrap";

export const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img
          width={50}
          src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
        />
      </Col>
      <Col lg={10} className="List">
        <div>{item.name}</div>
        <div>{item.phoneNum}</div>
      </Col>
    </Row>
  );
};
