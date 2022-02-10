import { Container, AboutItem } from "./styles";

const CaricatureItem: React.FC<any> = ({ item }) => {
  return (
    <Container>
      <img src={item.photoUrl} alt={item.name} />

      <AboutItem>
        <h1>R$ {item.price}</h1>
      </AboutItem>
    </Container>
  );
};

export default CaricatureItem;
