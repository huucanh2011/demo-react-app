import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

function Item({ item }) {
  const [curStatus, setCurStatus] = useState(item?.status || "NOT YET");

  const handleChangeStatus = ({ target: { value } }) => {
    setCurStatus(value);
  };

  console.log(curStatus);

  return (
    <Card className="shadow-sm rounded mb-2">
      <Card.Body>
        <Row>
          <Col xs="4">
            <div className="overflow-hidden">
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  maxHeight: 160,
                }}
                src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
                alt="item"
              />
            </div>
          </Col>
          <Col xs="8">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <div>Name: </div>
                <div>Quantity: </div>
                <div>Description: </div>
                <div>Status: </div>
              </div>
              <div>
                {["NOT YET", "FINISH", "FAIL"].map((status, index) => (
                  <Form.Check
                    key={`status_${index}`}
                    className="mb-1"
                    type="radio"
                    label={status}
                    name="status"
                    value={status}
                    id={`status_${index}`}
                    checked={status === curStatus}
                    onChange={(e) => handleChangeStatus(e)}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Item;
