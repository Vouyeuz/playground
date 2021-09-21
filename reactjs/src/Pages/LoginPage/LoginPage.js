import React, { Component } from "react";
import { Card } from "reactstrap";
import { LoginContainer } from "../../Components";

export class LoginPage extends Component {
  render() {
    return (
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Card className="p-2 border-rounded-5 bg-primary">
          <LoginContainer />
        </Card>
      </div>
    );
  }
}

export default LoginPage;
