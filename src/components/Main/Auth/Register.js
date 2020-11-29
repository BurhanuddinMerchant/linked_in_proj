import React from "react";
import { Form, Button, Container, Col, Row, Card } from "react-bootstrap";
const Login = () => {
  return (
    <div className="align-me">
      <Container centered className="my-auto">
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" />
                    <br />
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                    <br />
                    <Form.Label>School</Form.Label>
                    <Form.Control type="text" placeholder="School" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
