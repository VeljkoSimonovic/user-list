import React, { Component } from "react";
import "./style.scss";

class Article extends Component {
  render() {
    const { img, name, email, dob } = this.props;
    return (
      <div className={this.props.classname}>
        <img src={img} alt="" />
        <div>
          <p>{name}</p>
          <p>{email}</p>
          <p>{dob}</p>
        </div>
      </div>
    );
  }
}

export default Article;
