import React, { Component } from "react";
import { Layout, Input, DatePicker, Radio, Button } from "antd";
import * as UI from "../UI";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    const { Header, Footer, Content } = Layout;
    const { Search } = Input;
    const { RangePicker } = DatePicker;
    return (
      <div>
        <Layout>
          <UI.HeaderStyle>
            <Header>News Search</Header>
          </UI.HeaderStyle>
          <UI.ContentContainer>
            <Content>
              <UI.SearchContainer>
                <Radio.Group onChange={this.onChange} value={this.state.value}>
                  <Radio value={1}>Headlines Only</Radio>
                  <Radio value={2}>Everything</Radio>
                </Radio.Group>
                <RangePicker onChange={() => this.dateChange()} />
                <Search
                  placeholder="Search the News"
                  //enterButton="Search"
                  // size="large"
                  //onSearch={value => console.log(value)}
                />
                <Button type="primary" icon="search">
                  Search
                </Button>
              </UI.SearchContainer>
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
