import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 15px;
  // min-width: 200px;
  // height: 350px;
  // display: flex;
  // flex-direction: column;
  align-items: center;
  // justify-content: center;
  background-color: yellow;
`;

const Image = styled.img`
  height: 20vh;
  object-fit: cover;
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const Wrapper = styled.div`
  background-color: green;
`;

const Icon = styled.div`
  margin: 10px;
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
