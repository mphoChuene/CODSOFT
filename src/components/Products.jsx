import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
const Container = styled.div`
  padding: 20px;
  display: flex;
`;

const Products = () => {
  return (
    <div>
      <Container>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
};

export default Products;