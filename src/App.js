import React, { useState } from "react";
import "./App.css";
import { fetchNews } from "../src/api/news";
import { Button } from "../src/components/button";
import { Input } from "../src/components/input";
import Routes from "./components/Routes";

function App() {

  const [ keyword, setKeyword ] = useState('')

  return (
    <div>
      <Routes></Routes>
      <Input placeholder="type keyword"
            handleChange={(val) => setKeyword(val)}
       />
      <Button handleClick={() => fetchNews(keyword)} name="fetch" />
      {keyword}
      <div>
      <p className="news"></p></div>
    </div>
  );
}

export default App;
