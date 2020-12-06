import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function TaskList() {
  return (
    <Row>
      <Col sm="4" md="3">
        <Card className="shadow rounded-lg mb-2">
          <Link className="text-dark" to="/projects/1/tasks/1">
            <Card.Img
              variant="top"
              src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
            />
          </Link>
          <Card.Body>
            <span className="font-weight-bold h6">
              <Link className="text-dark" to="/projects/1/tasks/1">
                Task name
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col sm="4" md="3">
        <Card className="shadow rounded-lg mb-2">
          <Link className="text-dark" to="/projects/1/tasks/1">
            <Card.Img
              variant="top"
              src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
            />
          </Link>
          <Card.Body>
            <span className="font-weight-bold h6">
              <Link className="text-dark" to="/projects/1/tasks/1">
                Task name
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col sm="4" md="3">
        <Card className="shadow rounded-lg mb-2">
          <Link className="text-dark" to="/projects/1/tasks/1">
            <Card.Img
              variant="top"
              src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
            />
          </Link>
          <Card.Body>
            <span className="font-weight-bold h6">
              <Link className="text-dark" to="/projects/1/tasks/1">
                Task name
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
      <Col sm="4" md="3">
        <Card className="shadow rounded-lg mb-2">
          <Link className="text-dark" to="/projects/1/tasks/1">
            <Card.Img
              variant="top"
              src="https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp"
            />
          </Link>
          <Card.Body>
            <span className="font-weight-bold h6">
              <Link className="text-dark" to="/projects/1/tasks/1">
                Task name
              </Link>
            </span>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default TaskList;
