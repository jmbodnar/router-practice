import React, { Component } from "react";

class PageHeader extends Component {
  state = {};
  render() {
    return (
      <header className="text-center mb-4">
        <h2>{this.props.title}</h2>
      </header>
    );
  }
}

export default PageHeader;
