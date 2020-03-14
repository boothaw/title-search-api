<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <Home></Home>
=======
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
>>>>>>> newBranch
    </div>
  );
}

export default App;
