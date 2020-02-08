import React, { Component } from "react";
import { Layout, Input, DatePicker, Radio, Button } from "antd";
import * as UI from "../UI";
import RenderSearch from "../components/RenderSearch";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioValue1: "",
      radioValue2: "",
      searchQuery: ""
    };
  }

  dateChange(date, dateString) {
    console.log(date, dateString);
  }

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  radioCheckSearch = () => {
    const radioValue1 = this.state;
    // fix this for searchtype
    if (radioValue1) {
      console.log("healines only");
    } else {
      // search everything
    }
  };

  render() {
    const { Header, Footer, Content } = Layout;
    const { Search } = Input;
    const { RangePicker } = DatePicker;
    return (
      <div>
        <Layout>
          <UI.HeaderStyle>
            <Header>Search the News</Header>
          </UI.HeaderStyle>
          <UI.ContentContainer>
            <Content>
              <UI.SearchContainer>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={this.state.radioValue1}>Headlines Only</Radio>
                  <Radio value={this.state.radioValue2}>Everything</Radio>
                </Radio.Group>
                <RangePicker onChange={() => this.dateChange()} />
                <Search
                  placeholder="What are you looking for?"
                  onSearch={value => console.log(value) => this.state.}
                  style={{ width: 425 }}
                />
                <Button type="primary" icon="search">
                  Search
                </Button>
              </UI.SearchContainer>
              <UI.ArticleContainer>
                <div>
                  <RenderSearch />
                </div>
              </UI.ArticleContainer>
            </Content>
          </UI.ContentContainer>
          <UI.FooterStyle>
            <Footer>Footer</Footer>
          </UI.FooterStyle>
        </Layout>
      </div>
    );
  }
}
