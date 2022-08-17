import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNum, setPhoneNum] = useState();

  const getName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const getNum = (event) => {
    console.log(event.target.value);
    setPhoneNum(event.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={getName}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={getNum}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};
