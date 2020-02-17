import React, { Component } from "react";
import { Layout, Input, DatePicker, Radio, Button } from "antd";
import * as UI from "../UI";
import RenderSearch from "../components/RenderSearch";

import { fakeDataResponse } from "../constants/FakeData";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searchQuery: "",
      filterType: ""
    };
  }

  searchArticles(searchTerm) {
    console.log("SEARCH ARTICLES", searchTerm);
    // Make the API call.
  }

  dateChange(date, dateString) {
    console.log(date, dateString);
  }

  onChange = e => {
    this.setState({
      filterType: e.target.value
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
                <Radio.Group onChange={this.onChange} value={this.state.filterType}>
                  <Radio value="HEADLINES">Headlines Only</Radio>
                  <Radio value="EVERYTHING">Everything</Radio>
                </Radio.Group>
                <RangePicker onChange={() => this.dateChange()} />
                <Search
                  placeholder="What are you looking for?"
                  onSearch={value => this.searchArticles(value)}
                  onChange={e =>
                    this.setState({ searchQuery: e.currentTarget.value })
                  }
                  style={{ width: 425 }}
                />
                <Button
                  onClick={() => this.searchArticles(this.state.searchQuery)}
                  type="primary"
                  icon="search"
                >
                  Search
                </Button>
              </UI.SearchContainer>
              <UI.ArticleContainer>
                <div>
                  <RenderSearch results={this.state.searchResults} />
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
