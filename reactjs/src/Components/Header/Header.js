import React, { Component } from "react";
import { Card } from "reactstrap";

export class Header extends Component {
  render() {
    return (
      <div>
        <Card className="pb-1 m-2 shadow bg-primary">
          <h3 className="m-3">
            <strong className="text-white">GitHub </strong>Jobs
          </h3>
        </Card>
      </div>
    );
  }
}

export default Header;
