import React from "react";
import styled from "styled-components";

const Section4: React.FC = () => {
  return (
    <Wrapper>
      <LeftContainer>
        <Description>
          <p className="line1">We designed Clubhouse with the belief that</p>
          <p className="line2">people are at the center of every moment.</p>
          <p className="line3">We are so excited for you to join :)</p>
        </Description>
      </LeftContainer>
      <RightContainer>
        <Images>
          <Image>
            <img src="./assets/girl.png" alt="" />
          </Image>

          <Button>
            <img src="./assets/qrCode_black.png" alt="" />
            <span>Download the app</span>
          </Button>
        </Images>
      </RightContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 70px 0px;
  min-height: 55vh;
  background-color: #fee25d;
  display: flex;
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
  padding-left: 300px;
  flex: 1;
`;

const Description = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-center;
  color: #fd9a2f;
  .line1 {
    font-size: 35px;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 1.5;
    margin-bottom: 10px;
  }
  .line2 {
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 1.2px;
    line-height: 1.2;
    margin-bottom: 70px;
  }
  .line3 {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    letter-spacing: 1px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  padding-left: 20px;
`;

const Images = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;

const Image = styled.div`
  height: 160px;
  width: 160px;
  border: 2px solid #000;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: -2px 9px 0px 0px #bfa78c;
  margin-bottom: 70px;
  img {
    height: 100%;
    width: 100%;
  }
`;

const Button = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 35px;
  padding: 10px 35px;
  width: 280px;
  border: 3px solid #000;
  box-shadow: 0px 7px 0px 0px #fd9a2f;

  img {
    height: 50px;
    width: 50px;
  }
  span {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
`;

export default Section4;
