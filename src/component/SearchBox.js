import { Row, Col, Form, Button } from "react-bootstrap";

export const SearchBox = () => {
  return (
    <Row>
      <Col lg={9} className="searchWrap">
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
      </Col>
      <Col lg={2}>
        <Button className="searchBtn">찾기</Button>
      </Col>
    </Row>
  );
};
