import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

const Container = styled.div`
  padding: 2px;
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around;
  background-color: blue;
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
