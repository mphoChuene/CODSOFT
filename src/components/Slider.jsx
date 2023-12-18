import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width:100%;
    height: 100vh;
    display; flex;
    position: relative;
    // background-color: blue; 
    overflow:hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-100vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 24vh;
//   background-color: red
`;

const Title = styled.h1`
  font-size: 70px;
  width:100vh;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {

    const [slideIndex, setSlideIndex]=useState(0) 
const handleClick = (direction) => {};

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="#fcf1ed">
          <ImageContainer>
            {" "}
            <Image src="https://images.unsplash.com/photo-1700688001306-66fb877b3bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" />
          </ImageContainer>
          <InfoContainer>
            <Title>December Sale!</Title>
            <Description>
              {" "}
              Do not compromise on style this Dezember! The first 100 customers
              will recieve 50% off on their purchase
            </Description>
            <Button>Show Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#f5fafd">
          <ImageContainer>
            {" "}
            <Image src="https://images.unsplash.com/photo-1702082326071-60b2dce42559?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </ImageContainer>
          <InfoContainer>
            <Title>December Sale!</Title>
            <Description>
              {" "}
              Do not compromise on style this Dezember! The first 100 customers
              will recieve 50% off on their purchase
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="#f5fafd">
          <ImageContainer>
            {" "}
            <Image src="https://images.unsplash.com/photo-1702082326071-60b2dce42559?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </ImageContainer>
          <InfoContainer>
            <Title>December Sale!</Title>
            <Description>
              {" "}
              Do not compromise on style this Dezember! The first 100 customers
              will recieve 50% off on their purchase
            </Description>
            <Button>Shop Now</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
