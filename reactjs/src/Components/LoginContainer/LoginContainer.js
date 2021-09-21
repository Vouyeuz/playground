// import React, { Component } from 'react'

// export class LoginContainer extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
             
//         }
//     }
    
//     render() {
//         return (
//             <div>
//              login   
//             </div>
//         )
//     }
// }

// export default LoginContainer


import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const LoginContainer = () => {
  return (
    <Form>
      <FormGroup row>
        <Label className= "font-weight-bold" for="LoginContainerEmail">Email</Label>
        <Col>
          <Input type="email" name="email" id="LoginContainerEmail" placeholder="user@domain.com" />
        </Col>
      </FormGroup>
      <FormGroup row className= "py-2">
        <Label for="LoginContainerPassword">Password</Label>
        <Col>
          <Input type="password" name="password" id="LoginContainerPassword" placeholder="********" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col className= "py-2">
          <Button>Login</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default LoginContainer;
