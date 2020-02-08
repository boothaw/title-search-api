import styled from "@emotion/styled";

export const SiteContainer = styled("div")`
  padding-bottom: 69px;
`;

export const HeaderStyle = styled("div")`
  .ant-layout-header {
    display: flex;
    justify-content: center;
    background-color: lightblue;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    // margin-bottom: 24px;
  }
`;

export const ContentContainer = styled("div")`
  // display: flex;
  // justify-content: center;
  margin-left: 0;
  margin-right: 0;
  height: 700px;
  // background-color: #fff;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
`;

export const SearchContainer = styled("div")`
  border-top: 6px double #000;
  border-bottom: 2px solid #000;
  min-width: 100%;
  padding-left: auto;
  padding-right: auto;
  background-color: #f0f2f5;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ant-radio-group {
    margin-bottom: 16px;

    .ant-radio-wrapper:first-child {
      margin-right: 130px;
    }

    .ant-radio-wrapper:nth-child(2) {
      margin-right: 0px;
    }
  }

  .ant-calendar-picker {
    margin-bottom: 16px;
    width: 395px;
  }

  .ant-input-search {
    height: 38px;
    margin-bottom: 16px;
    width: 400px;
  }

  .ant-btn {
    width: 250px;
  }
`;

export const ArticleContainer = styled("div")`
  margin-left: 75px;
  margin-right: 75px;
  height: 700px;
  background-color: #fff;
  // border-left: 2px solid black;
  // border-right: 2px solid black;

  .ant-btn {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FooterStyle = styled("div")`
  .ant-layout-footer {
    background-color: lightblue;
    width: 100%;
    font-family: "Montserrat", sans-serif;
    display: flex;
  }
`;
