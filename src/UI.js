import styled from "@emotion/styled";

export const SiteContainer = styled("div")`
  .ant-layout {
    min-height: 100vh;
  }
`;

export const HeaderStyle = styled("div")`
  .ant-layout-header {
    display: flex;
    justify-content: center;
    background-color: lightblue;
    font-size: 24px;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 24px;
  }
`;

export const ContentContainer = styled("div")`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  height: 700px;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
`;

export const SearchContainer = styled("div")`
  // border: grey 3px solid;
  width: 650px;
  min-width: 100%;
  margin-left: 0;
  margin-right: 0;
  height: 200px;
  padding-top: 32px;
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
    margin-bottom: 16px;
    min-width: 100%;
  }

  .ant-btn {
    width: 250px;
  }
`;

export const FooterStyle = styled("div")`
  .ant-layout-footer {
    background-color: lightblue;
    width: 100%;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    // right: 0:
    font-family: "Montserrat", sans-serif;
    display: flex;
    margin-bottom: 0;
  }
`;
