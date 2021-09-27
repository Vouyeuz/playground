import React, { Component } from "react";
import { Card } from "reactstrap";
import { LoginContainer } from "../../Components";

export class LoginPage extends Component {
  render() {
    return (
      <div style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <Card className="p-2 border-rounded border-dark bg-gradient bg-secondary">
        <Card className="pt-3 mb-4 border-rounded text-center bg-gradient bg-primary">
          <p style={{fontSize: "1.4rem"}}><strong>GitHub</strong> Jobs</p>
        </Card>
          <LoginContainer />
        </Card>
      </div>
    );
  }
}

export default LoginPage;
