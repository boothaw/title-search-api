import React, { Component } from "react";
// import fakeDataResponse from "../constants/FakeData";

const RenderSearch = ({ results }) => {
  console.log("RESULTS", results);
  // Map over this... results[0].articles
  return results.map(result => <div>...</div>);
};

export default RenderSearch;
