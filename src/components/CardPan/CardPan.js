import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pan from "../../assets/Pan.jpg";

function CardPan() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pan} />
      <Card.Body>
        <Card.Title>Pan Coto</Card.Title>
        <Card.Text>
          Pan de salvado, exclusivamente para tus mañana mas alegres. Sin gluten.
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
  );
}

export default CardPan;