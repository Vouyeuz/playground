import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export class LoginContainer extends Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label className="font-weight-bold" for="LoginContainerEmail">
            Email
          </Label>
          <Col>
            <Input
              type="email"
              name="email"
              id="LoginContainerEmail"
              placeholder="user@domain.com"
            />
          </Col>
        </FormGroup>
        <FormGroup row className="py-2">
          <Label for="LoginContainerPassword">Password</Label>
          <Col>
            <Input
              type="password"
              name="password"
              id="LoginContainerPassword"
              placeholder="********"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col className="py-2">
            <Link to="/job-search">
              <Button className="bg-primary shadow">Login</Button>
            </Link>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default LoginContainer;
