import "./App.css";
import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Article from "./Article/Article";
import uuid from "react-uuid";
import data from "./data.json";
class App extends Component {
  state = { data: data, articleclassname: "articlediv" };

  changeArticle = () => {
    this.state.articleclassname === "articlediv"
      ? this.setState({ articleclassname: "articlediv1" })
      : this.setState({ articleclassname: "articlediv" });
  };
  render() {
    return (
      <>
        <Header changeArticle={this.changeArticle} />
        <div className="articlecontainer">
          {this.state.data.results.map((e) => (
            <Article
              img={e.picture.large}
              name={e.name.first + " " + e.name.last}
              email={e.email}
              dob={e.dob.date}
              key={uuid()}
              classname={this.state.articleclassname}
            />
          ))}
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
