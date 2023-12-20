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
  height: 350px;
  display: flex;
  flex-wrap:wrap;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;

const Circle = styled.div`
  display: flex;
  flex-direction: row;
  background-color:red;
`;
const Image = styled.img`
  height: 20vh;
  object-fit: cover;
`;
const Info = styled.div``;

const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle>
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
      </Circle>
    </Container>
  );
};

export default Product;
