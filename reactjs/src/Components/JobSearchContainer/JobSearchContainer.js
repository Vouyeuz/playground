import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

export class JobSearchContainer extends Component {
  constructor() {
    super();

    this.state = {};
  }

  renderSearch() {
    return (
      <div className="m-4">
        <Form>
          <FormGroup row inline>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleEmail">
                  <strong>Job Description</strong>
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  className="shadow"
                  placeholder="Filter by title, companies ..."
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="examplePassword">
                  <strong>Location</strong>
                </Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  className="shadow"
                  placeholder="Filter by city, state ..."
                />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck" className= "shadow"/>
                <Label for="exampleCheck" check>
                  Full Time Only
                </Label>
              </FormGroup>
            </Col>
            <Col>
              <Button type= "submit" className="shadow">Search</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }

  render() {
    return <div>{this.renderSearch()}</div>;
  }
}

export default JobSearchContainer;
