import React, { Component } from "react";
import fakeDataResponse from "./constants/FakeData";

export default class RenderSearch extends Component {

  render() {
    const renderUI = () => {
      const renderData = () => {
          return fakeDataResponse.map(data => {
              return <div>{data.title}</div>
          })
      };
  
      return <div>{renderData()}</div>
    };
