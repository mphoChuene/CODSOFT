import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 15px;
  // min-width: 350px;
  height: 350px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  transition: all ease 0.5s;
  &:hover {
    background-color: lightgrey;
  }
`;

const Image = styled.img`
  height: 25vh;
  width: 90%;
  object-fit: cover;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const Wrapper = styled.div`
  // background-color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 400px;
`;

const Icon = styled.div`
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: transparent;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Wrapper>
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingBagOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Product;
