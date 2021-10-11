import React from "react";
import styled from "styled-components";

const Section1: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <img src="./assets/clubhouse_logo.png" alt="" />
          <HeaderMenu>
            <span>Blog</span>
            <span>Jobs</span>
          </HeaderMenu>
          <HeaderRight>
            <img src="./assets/qrCode.png" alt="" />
            <span>Get Clubhouse</span>
          </HeaderRight>
        </Header>
        <Banner>
          <img src="./assets/Banner1.png" alt="" />
        </Banner>
        <Text>
          Bounce around the hallways of the Internet and meet incredible people
        </Text>
        <Buttons>
          <img src="./assets/apple_store.png" alt="" />
          <img src="./assets/play_store.png" alt="" />
        </Buttons>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  min-height: 100vh;
  background-color: #221f14;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 230px;
  padding-right: 230px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  padding: 30px 5px;
  margin-bottom: 25px;
  img {
    height: 35px;
    width: 200px;
    color: #fff;
  }
`;
const HeaderMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  color: #fff;
  align-items: center;
  flex: 1;
  span {
    cursor: pointer;
    margin-left: 80px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  img {
    margin-right: 15px;
    height: 50px;
    width: 50px;
  }
  span {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.5px;
    color: #fff;
  }
`;

const Banner = styled.div`
  img {
    width: 100%;
    height: auto;
  }
  margin-bottom: 25px;
`;

const Text = styled.div`
  font-size: 19px;
  border-bottom: 1px solid #38352b;
  border-top: 1px solid #38352b;
  padding: 35px 0px;
  padding-left: 3px;
  font-weight: 500;
  letter-spacing: 1.5px;
  color: #fff;
  margin-bottom: 35px;
`;
const Buttons = styled.div`
  display: flex;
  img {
    margin-right: 15px;
    cursor: pointer;
  }
`;
export default Section1;
