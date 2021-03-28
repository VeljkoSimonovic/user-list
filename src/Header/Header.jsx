import React, { Component } from "react";
import "./style.scss";

class Header extends Component {
  state = { value: "" };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  componentDidUpdate() {
    console.log(this.state.value);
  }
  render() {
    return (
      <div className="headerdiv">
        <h1>React Users</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.changeArticle();
          }}
        >
          Change view
        </button>
      </div>
    );
  }
}

export default Header;
