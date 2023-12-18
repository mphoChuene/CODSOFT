import styled from "@emotion/styled";

const Container = styled.div`
height: 30px;
font-size:15px;
background-color: red;
color: white;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
`

const Announcement = () => {
  return( 

    <Container>Awesome deal! Free shipping for orders over R2000!! </Container>
  )
};

export default Announcement;
 