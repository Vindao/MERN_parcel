import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Page from "../Components/Page";

const Home = () => {
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }, []);
  return (
    <Page>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        Follow me at <a href="https://github.com/Vindao">@vindao</a>
      </div>
    </Page>
  );
};

export default Home;
