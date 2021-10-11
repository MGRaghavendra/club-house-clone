import React from "react";
import styled from "styled-components";

const Section3: React.FC = () => {
  return (
    <Container>
      <Title>
        <span>The magic of Clubhouse</span>
        <span>is witnessing the most</span>
      </Title>
      <Images>
        <img src="./assets/unlikely.png" alt="" className="unlikely" />
        <img src="./assets/collision.png" alt="" className="collision" />
      </Images>
      <Footer>
        <span>of people.</span>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  min-height: 80vh;
  background-color: #bfa78c;
  color: #fee25d;
  padding: 20px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  padding-left: 230px;
  padding-right: 230px;
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  span {
    font-size: 38px;
    letter-spacing: 2px;
    font-weight: 200;
  }
`;

const Images = styled.div`
  padding: 10px 0px;
  .unlikely {
    margin-left: 20%;
    height: 180px;
    width: 540px;
  }
  .collision {
    margin-left: 50%;
    height: 180px;
    width: 540px;
  }
`;

const Footer = styled.div`
  padding-left: 230px;
  padding-right: 230px;
  span {
    margin-left: 80%;
    font-size: 38px;
    letter-spacing: 2px;
    font-weight: 200;
  }
`;
export default Section3;
