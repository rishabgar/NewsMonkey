import React, { Component } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

export class News extends Component {
  constructor() {
    super();
    console.log("This is news constructor");
    this.state = {
      article: [],
      loading: false,
    };
  }
  async componentDidMount() {
    const details = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5795dbd941e34264b005fe612a5dfb1e"
    );
    this.setState({ article: details.data.articles });
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.moneycontrol.com/static-mcnews/2023/03/pharma-bbo-770x433.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
