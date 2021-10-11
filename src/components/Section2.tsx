import React from "react";
import styled from "styled-components";
import { data } from "./data/data";
interface detail {
  image_url: string;
  heading: string;
  description: string;
}
const Section2: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <img src="./assets/circle_phone.png" alt="" />
        </ImageContainer>
        <Details>
          {data.map((item: detail, index: number) => {
            return (
              <Detail>
                <Icon>
                  <img src={item.image_url} alt="" />
                </Icon>
                <Detailsheading>{item.heading}</Detailsheading>
                <Description>{item.description}</Description>
              </Detail>
            );
          })}
        </Details>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: #f1efe3;
  padding-left: 230px;
  padding-right: 230px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 0.65;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    height: 70%;
    transform: rotate(5deg);
  }
`;

const Details = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  img {
    height: 50px;
    width: 50px;
  }
`;

const Detailsheading = styled.div`
  font-size: 23px;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Description = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #555348;
  line-height: 1.5;
`;

export default Section2;
