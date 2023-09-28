import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [articles, setArticles] = useState([]);

  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  async function fetchData() {
    const details = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=5`
    );
    setArticles(details.data.articles);
    setTotalResults(details.data.totalResults);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchMoreData() {
    const details = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&pageSize=5&page=${page}`
    );
    setArticles((prev) => [...prev, ...details.data.articles]);
    setPage((prev) => prev + 1);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.category, props.apiKey]);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>NewsMonkey - Top Headlines</h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length <= totalResults}
        loader={<h1 style={{ textAlign: "center" }}>Loading...</h1>}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
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
      </InfiniteScroll>
    </>
  );
}

export default News;
