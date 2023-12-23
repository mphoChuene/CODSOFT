import styled from "styled-components";
import Navbar from "./Navbar";
import Announcement from "./Announcement";

const Container = styled.div``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
    </Container>
  );
};

export default ProductList;
