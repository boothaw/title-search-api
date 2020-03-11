import React, { useState } from "react";
import "./App.css";
import { fetchNews } from "../src/components/newsquery";
import { Button } from "../src/components/button";
import { Input } from "../src/components/input";
import Home from "./views/Home";

function App() {
  const [keyword, setKeyword] = useState("");

  return (
    <div>
      <Home></Home>
      <Input placeholder="type keyword" handleChange={val => setKeyword(val)} />
      <Button handleClick={() => fetchNews(keyword)} name="fetch" />
      {keyword}
      <div>
        <p className="news"></p>
      </div>
    </div>
  );
}

export default App;
