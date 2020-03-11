import React, { useEffect, useState } from "react";
import { Input } from "../components/input";
import { Button } from "../components/button";
import { fetchNews } from "../components/newsquery";

const Home = ({}) => {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <h1>home page</h1>
      <Input placeholder="type keyword" handleChange={val => setKeyword(val)} />
      <Button handleClick={() => fetchNews(keyword)} name="fetch" />
      {/* {keyword} */}
      <div>
        <p className="news"></p>
      </div>
    </div>
  );
};

export default Home;
