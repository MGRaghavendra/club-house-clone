import React from "react";
import styled from "styled-components";

const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <About>
          <Box1>
            <img src="./assets/girl.png" alt="" className="girl-img" />
            <img
              src="./assets/clubhouse_logo.png"
              alt=""
              className="logo-img"
            />
            <Buttons>
              <img src="./assets/apple_store.png" alt="" />
              <img src="./assets/play_store.png" alt="" />
            </Buttons>
          </Box1>
          <Box2>
            <span className="heading">More Clubhouse</span>
            <span className="menu">Blog</span>
            <span className="menu">Knowledge Center</span>
            <span className="menu">New User Guide</span>
            <span className="menu">Creator Guide</span>
            <span className="menu">Guidelines</span>
          </Box2>
          <Box3>
            <span className="heading">Get in touch</span>
            <span className="menu">Contact</span>
            <span className="menu">Jobs</span>
            <span className="menu">Press</span>
            <span className="menu">Ask a town hall question</span>
          </Box3>
        </About>
        <hr style={{ opacity: "0.2", height: "1px", marginBottom: "50px" }} />
        <Bottom>
          <Icons>
            <img src="./assets/twitter.png" alt="" />
            <img src="./assets/instagram.png" alt="" />
            <img src="./assets/linkedin.png" alt="" />
          </Icons>
          <Terms>
            <span className="item">Privacy</span>
            <span className="item">Terms</span>
          </Terms>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: #221f14;
  padding: 30px 200px;
  min-height: 80vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

const About = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 35px;
`;

const Box1 = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  justify-content: space-around;
  .girl-img {
    height: 80px;
    width: 80px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .logo-img {
    height: 30px;
    width: 180px;
    margin-bottom: 20px;
  }
`;

const Buttons = styled.div`
  display: flex;
  img {
    cursor: pointer;
    margin-right: 10px;
  }
`;
const Box2 = styled.div`
  display: flex;
  flex: 0.25;
  flex-direction: column;
  justify-content: center;
  color: #f1efe3;
  span {
    font-size: 18px;
    margin-bottom: 15px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      color: #fda92f;
      opacity: 0.8;
    }
  }
  .heading {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
    cursor: pointer;
    opacity: 1;
    &:hover {
      color: #fda92f;
    }
  }
`;
const Box3 = styled.div`
  display: flex;
  flex: 0.25;
  flex-direction: column;
  color: #f1efe3;
  span {
    font-size: 18px;
    margin-bottom: 15px;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      color: #fda92f;
      opacity: 0.8;
    }
  }
  .heading {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
    opacity: 1;
    cursor: pointer;
    &:hover {
      color: #fda92f;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f1efe3;
`;
const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-right: 20px;
    height: 35px;
    width: 35px;
    cursor: pointer;
  }
`;
const Terms = styled.div`
  color: #f1efe3;
  font-size: 16px;
  font-weight: 500;
  opacity: 0.5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 40px;
    cursor: pointer;
    letter-spacing: 0.5px;
    &:hover {
      color: #fda92f;
    }
  }
`;
export default Footer;
